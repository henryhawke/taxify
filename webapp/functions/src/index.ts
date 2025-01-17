import * as admin from 'firebase-admin'
import * as taxFunctions from './tax'
import { onRequest } from 'firebase-functions/v2/https'
import { PublicKey } from '@solana/web3.js'
import * as nacl from 'tweetnacl'
import bs58 from 'bs58'
import { https } from 'firebase-functions'

// Initialize Firebase Admin
if (!admin.apps.length) {
    try {
        admin.initializeApp()
    } catch (error) {
        console.error('Error initializing Firebase Admin:', error)
    }
}

// Export tax functions with correct prefixes
export const taxSaveTaxData = taxFunctions.saveTaxData
export const taxProcessTaxData = taxFunctions.processTaxData

// Next.js Server Handler
export const nextServer = https.onRequest((req, res) => {
    // Forward the request to Next.js server
    const server = require(`${process.cwd()}/.next/standalone/server.js`)
    return server.default(req, res)
})

// Handle API routes
export const nextApi = onRequest(async (req, res) => {
    // Enable CORS
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(204).send('')
        return
    }

    // Only handle /api/auth/phantom endpoint
    if (req.path === '/api/auth/phantom') {
        if (req.method !== 'POST') {
            res.status(405).json({ error: 'Method not allowed' })
            return
        }

        try {
            const { publicKey, signature, nonce } = req.body

            if (!publicKey || !signature || !nonce) {
                res.status(400).json({ error: 'Missing required fields' })
                return
            }

            // Verify the public key is valid
            let pubKey: PublicKey
            try {
                pubKey = new PublicKey(publicKey)
                if (!PublicKey.isOnCurve(pubKey.toBuffer())) {
                    throw new Error('Invalid public key')
                }
            } catch (error) {
                res.status(400).json({ error: 'Invalid public key' })
                return
            }

            // Create the message that was signed
            const message = `Sign this message for authenticating with Taxify.\n\nPublic Key: ${publicKey}\nNonce: ${nonce}`

            // Verify the signature
            const signatureUint8 = bs58.decode(signature)
            const messageUint8 = new TextEncoder().encode(message)

            const verified = nacl.sign.detached.verify(
                messageUint8,
                signatureUint8,
                pubKey.toBytes()
            )

            if (!verified) {
                res.status(401).json({ error: 'Invalid signature' })
                return
            }

            // Get or create user in Firestore
            const db = admin.firestore()
            const userRef = db.collection('users').doc(publicKey)
            const userDoc = await userRef.get()

            const timestamp = admin.firestore.FieldValue.serverTimestamp()

            if (!userDoc.exists) {
                // Create new user
                await userRef.set({
                    publicKey,
                    createdAt: timestamp,
                    lastLoginAt: timestamp,
                    walletProvider: 'phantom',
                    verified: true,
                    verifiedAt: timestamp,
                    uid: publicKey
                })
            } else {
                // Update last login
                await userRef.update({
                    lastLoginAt: timestamp,
                    verified: true,
                    verifiedAt: timestamp
                })
            }

            // Create Firebase custom token
            const customToken = await admin.auth().createCustomToken(publicKey, {
                walletProvider: 'phantom',
                publicKey: publicKey
            })

            // Store the token
            await db.collection('auth_tokens').doc(publicKey).set({
                token: customToken,
                createdAt: timestamp,
            })

            res.status(200).json({ token: customToken })
        } catch (error) {
            console.error('Authentication error:', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    } else {
        res.status(404).json({ error: 'Not found' })
    }
}) 