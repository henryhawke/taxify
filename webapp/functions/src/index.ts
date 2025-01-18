import * as admin from 'firebase-admin'
import * as taxFunctions from './tax'
import { onCall, onRequest } from 'firebase-functions/v2/https'
import { PublicKey } from '@solana/web3.js'
import * as nacl from 'tweetnacl'
import bs58 from 'bs58'
import { https } from 'firebase-functions'
import cors from 'cors'
import { response } from 'express'
// import { Response } from 'express'

// Initialize Firebase Admin
if (!admin.apps.length) {
    try {
        admin.initializeApp()
    } catch (error) {
        console.error('Error initializing Firebase Admin:', error)
    }
}

// Initialize Firestore
const db = admin.firestore()

// Simplified CORS configuration
const corsHandler = cors({ origin: true })

// Export tax functions with v2
export const saveTaxData = onRequest((req, res) => {
    return corsHandler(req, res, async () => {
        try {
            // Handle preflight request
            if (req.method === 'OPTIONS') {
                res.set('Access-Control-Allow-Methods', 'POST');
                res.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
                res.set('Access-Control-Max-Age', '3600');
                return res.status(204).send('');
            }

            if (req.method !== 'POST') {
                return res.status(405).json({ error: 'Method not allowed' });
            }

            // Log the request for debugging
            console.log('Received request:', {
                method: req.method,
                headers: req.headers,
                body: req.body
            });

            const result = await taxFunctions.saveTaxData(req.body, res);
            return res.status(200).json(result);
        } catch (error) {
            console.error('Error in saveTaxData:', error);
            return res.status(500).json({
                error: 'Internal server error',
                details: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    });
});

export const processTaxData = onCall({
    cors: true,
    region: 'us-central1',
    maxInstances: 10
}, async (request) => {
    return taxFunctions.processTaxData(request.data, response)
})

// Next.js Server Handler
export const nextServer = https.onRequest((req, res) => {
    return corsHandler(req, res, async () => {
        try {
            const server = require(`${process.cwd()}/.next/standalone/server.js`)
            return server.default(req, res)
        } catch (error) {
            console.error('Error in nextServer:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    })
})

// Handle API routes
export const nextApi = onRequest((req, res) => {
    return corsHandler(req, res, async () => {
        // Handle nonce endpoint
        if (req.path === '/api/auth/nonce') {
            if (req.method !== 'GET') {
                return res.status(405).json({ error: 'Method not allowed' })
            }

            try {
                // Generate a random nonce
                const nonce = Math.random().toString(36).substring(2, 15)

                // Store the nonce in Firestore with a timestamp
                const timestamp = admin.firestore.FieldValue.serverTimestamp()

                await db.collection('nonces').add({
                    nonce,
                    createdAt: timestamp,
                    used: false
                })

                return res.status(200).json({ nonce })
            } catch (error) {
                console.error('Error generating nonce:', error)
                return res.status(500).json({ error: 'Failed to generate authentication nonce' })
            }
        }

        // Handle phantom endpoint
        if (req.path === '/api/auth/phantom') {
            if (req.method !== 'POST') {
                return res.status(405).json({ error: 'Method not allowed' })
            }

            try {
                const { publicKey, signature, nonce } = req.body

                if (!publicKey || !signature || !nonce) {
                    return res.status(400).json({ error: 'Missing required fields' })
                }

                // Verify nonce exists and hasn't been used
                const noncesRef = db.collection('nonces')
                const nonceQuery = await noncesRef.where('nonce', '==', nonce).where('used', '==', false).get()

                if (nonceQuery.empty) {
                    return res.status(401).json({ error: 'Invalid or expired nonce' })
                }

                // Mark nonce as used
                const nonceDoc = nonceQuery.docs[0]
                await nonceDoc.ref.update({ used: true })

                // Verify the public key is valid
                let pubKey: PublicKey
                try {
                    pubKey = new PublicKey(publicKey)
                    if (!PublicKey.isOnCurve(pubKey.toBuffer())) {
                        throw new Error('Invalid public key')
                    }
                } catch (error) {
                    return res.status(400).json({ error: 'Invalid public key' })
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
                    return res.status(401).json({ error: 'Invalid signature' })
                }

                // Get or create user in Firestore
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

                return res.status(200).json({ token: customToken })
            } catch (error) {
                console.error('Authentication error:', error)
                return res.status(500).json({ error: 'Internal server error' })
            }
        } else {
            return res.status(404).json({ error: 'Not found' })
        }
    })
}) 