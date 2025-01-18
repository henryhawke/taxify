import * as admin from 'firebase-admin'
import { Request, Response } from 'express'

export async function saveTaxData(req: Request, res: Response) {
    try {
        const { userId, taxInfo } = req.body

        // Validate request data
        if (!userId || typeof userId !== 'string') {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing or invalid userId'
                }
            })
        }

        if (!taxInfo || typeof taxInfo !== 'object') {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing or invalid taxInfo'
                }
            })
        }

        // Validate required tax info fields
        const requiredFields = ['address', 'year', 'summary', 'transactions']
        for (const field of requiredFields) {
            if (!(field in taxInfo)) {
                return res.status(400).json({
                    error: {
                        code: 'invalid-argument',
                        message: `Missing required field: ${field}`
                    }
                })
            }
        }

        // Validate summary fields
        const requiredSummaryFields = ['shortTermGains', 'longTermGains', 'totalIncome', 'totalFees', 'stateTax', 'stateCode', 'effectiveStateTaxRate']
        for (const field of requiredSummaryFields) {
            if (!(field in taxInfo.summary)) {
                return res.status(400).json({
                    error: {
                        code: 'invalid-argument',
                        message: `Missing required summary field: ${field}`
                    }
                })
            }
        }

        // Validate transactions array
        if (!Array.isArray(taxInfo.transactions)) {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Transactions must be an array'
                }
            })
        }

        // Validate transaction fields
        const requiredTransactionFields = ['type', 'timestamp', 'amount', 'price']
        for (const transaction of taxInfo.transactions) {
            for (const field of requiredTransactionFields) {
                if (!(field in transaction)) {
                    return res.status(400).json({
                        error: {
                            code: 'invalid-argument',
                            message: `Missing required transaction field: ${field}`
                        }
                    })
                }
            }
        }

        const db = admin.firestore()
        const timestamp = admin.firestore.Timestamp.now()

        // Prepare the data for saving
        const taxData = {
            ...taxInfo,
            createdAt: timestamp,
            updatedAt: timestamp,
            userId: userId, // Add userId to the document for reference
            lastModified: timestamp,
            status: 'completed'
        }

        // Save tax data to Firestore
        await db.collection('User').doc(userId).collection('TaxData').doc(taxInfo.year.toString()).set(taxData)

        return res.status(200).json({
            success: true,
            message: 'Tax data saved successfully',
            data: {
                year: taxInfo.year,
                timestamp: timestamp.toDate()
            }
        })
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

        // Validate request data
        if (!userId || typeof userId !== 'string') {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing or invalid userId'
                }
            })
        }

        if (!year || typeof year !== 'number') {
            return res.status(400).json({
                error: {
                    code: 'invalid-argument',
                    message: 'Missing or invalid year'
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