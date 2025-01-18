import type { NextApiRequest, NextApiResponse } from 'next'
import { getFirestore } from 'firebase-admin/firestore'
import { randomBytes } from 'crypto'
import { initAdmin } from '@/lib/firebase-admin'

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
        const { publicKey } = req.body

        if (!publicKey) {
            return res.status(400).json({ message: 'Public key is required' })
        }

        // Generate a random nonce
        const nonce = randomBytes(32).toString('base64')

        // Store the nonce using Admin SDK
        const db = getFirestore()
        await db.collection('nonces').doc(publicKey).set({
            nonce,
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        })

        return res.status(200).json({ nonce })
    } catch (error) {
        console.error('Nonce generation error:', error)
        return res.status(500).json({ message: 'Failed to generate nonce' })
    }
} 