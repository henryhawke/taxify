import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore } from 'firebase-admin/firestore'
import { PublicKey, nacl } from '@solana/web3.js'
import bs58 from 'bs58'
import { getAuth } from 'firebase-admin/auth'
import { initAdmin } from '@/lib/firebase-admin'
import tweetnacl from 'tweetnacl'

// Initialize Firebase Admin
initAdmin()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const { publicKey, signature, nonce } = req.body

        if (!publicKey || !signature || !nonce) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        // Get the stored nonce using Admin SDK
        const db = getFirestore()
        const nonceDoc = await db.collection('nonces').doc(publicKey).get()

        if (!nonceDoc.exists) {
            return res.status(400).json({ message: 'Invalid nonce' })
        }

        const nonceData = nonceDoc.data()!

        // Check if nonce has expired
        if (nonceData.expiresAt.toDate() < new Date()) {
            await nonceDoc.ref.delete()
            return res.status(400).json({ message: 'Nonce has expired' })
        }

        // Verify the signature
        const message = new TextEncoder().encode(
            `Sign this message for authenticating with Taxfy\nNonce: ${nonce}`
        )
        const signatureUint8 = bs58.decode(signature)
        const publicKeyObj = new PublicKey(publicKey)

        const isValid = tweetnacl.sign.detached.verify(
            message,
            signatureUint8,
            publicKeyObj.toBytes()
        )

        if (!isValid) {
            return res.status(400).json({ message: 'Invalid signature' })
        }

        // Clean up the used nonce
        await nonceDoc.ref.delete()

        // Create a Firebase custom token
        const auth = getAuth()
        const token = await auth.createCustomToken(publicKey)

        return res.status(200).json({ token })
    } catch (error) {
        console.error('Login error:', error)
        return res.status(500).json({ message: 'Authentication failed' })
    }
} 