import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const { userId, walletAddress, taxInfo, year, state } = req.body

        if (!userId || !walletAddress || !taxInfo || !year || !state) {
            return res.status(400).json({ message: 'Missing required fields' })
        }

        // Save to Firestore
        const docRef = doc(db, 'taxData', `${userId}_${walletAddress}_${year}`)
        await setDoc(docRef, {
            userId,
            walletAddress,
            taxInfo,
            year,
            state,
            updatedAt: new Date().toISOString(),
        })

        return res.status(200).json({ message: 'Tax data saved successfully' })
    } catch (error) {
        console.error('Error saving tax data:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
} 