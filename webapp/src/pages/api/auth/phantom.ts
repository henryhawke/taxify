/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { initAdmin } from '@/lib/firebase-admin'
import { PublicKey } from '@solana/web3.js'
import * as nacl from 'tweetnacl'
import bs58 from 'bs58'

// Initialize Firebase Admin
initAdmin()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { publicKey, signature, nonce } = req.body

        if (!publicKey || !signature || !nonce) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

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

        // Verify the signature
        const signatureUint8 = bs58.decode(signature)
        const messageUint8 = new TextEncoder().encode(
            `Sign this message for authenticating with Taxify.\n\nPublic Key: ${publicKey}\nNonce: ${nonce}`
        )

        const verified = nacl.sign.detached.verify(
            messageUint8,
            signatureUint8,
            pubKey.toBytes()
        )

        if (!verified) {
            return res.status(401).json({ error: 'Invalid signature' })
        }

        // Get or create user in Firestore
        const db = getFirestore()
        const userRef = db.collection('users').doc(publicKey)
        const userDoc = await userRef.get()

        if (!userDoc.exists) {
            // Create new user
            await userRef.set({
                publicKey,
                createdAt: new Date().toISOString(),
                lastLoginAt: new Date().toISOString(),
                walletProvider: 'phantom',
            })
        } else {
            // Update last login
            await userRef.update({
                lastLoginAt: new Date().toISOString(),
            })
        }

        // Create Firebase custom token
        const auth = getAuth()
        const customToken = await auth.createCustomToken(publicKey, {
            walletProvider: 'phantom',
        })

        return res.status(200).json({ token: customToken })
    } catch (error) {
        console.error('Authentication error:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
} 