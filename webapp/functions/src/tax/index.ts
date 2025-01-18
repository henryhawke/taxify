import * as admin from 'firebase-admin'
import { Request, Response } from 'express'

export async function saveTaxData(req: Request, res: Response) {
    try {
        const { userId, taxInfo } = req.body

        if (!userId || !taxInfo) {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing required fields: userId and taxInfo'
                }
            })
        }

        const db = admin.firestore()
        const timestamp = admin.firestore.Timestamp.now()

        // Save tax data to Firestore
        await db.collection('User').doc(userId).collection('TaxData').doc(taxInfo.year.toString()).set({
            ...taxInfo,
            createdAt: timestamp,
            updatedAt: timestamp
        })

        return res.status(200).json({ success: true, message: 'Tax data saved successfully' })
    } catch (error) {
        console.error('Error saving tax data:', error)
        return res.status(500).json({
            error: {
                code: 'internal',
                message: error instanceof Error ? error.message : 'Failed to save data to database'
            }
        })
    }
}

export async function processTaxData(req: Request, res: Response) {
    try {
        const { userId, year } = req.body

        if (!userId || !year) {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing required fields: userId and year'
                }
            })
        }

        const db = admin.firestore()
        const taxDataRef = db.collection('User').doc(userId).collection('TaxData').doc(year.toString())
        const taxData = await taxDataRef.get()

        if (!taxData.exists) {
            return res.status(404).json({
                error: {
                    code: 'not-found',
                    message: 'Tax data not found'
                }
            })
        }

        return res.status(200).json({ success: true, data: taxData.data() })
    } catch (error) {
        console.error('Error processing tax data:', error)
        return res.status(500).json({
            error: {
                code: 'internal',
                message: error instanceof Error ? error.message : 'Failed to process tax data'
            }
        })
    }
} 