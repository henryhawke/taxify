import * as admin from 'firebase-admin'
import { onCall } from 'firebase-functions/v2/https'

export const saveTaxData = onCall(async (request) => {
    try {
        const { userId, taxInfo } = request.data

        console.log('Received data:', JSON.stringify(request.data, null, 2))

        // Check if the user is trying to save their own data
        if (!request.auth) {
            throw new Error('Authentication required')
        }

        if (request.auth.uid !== userId) {
            throw new Error('Users can only save their own tax data')
        }

        // Validate request data
        if (!userId || typeof userId !== 'string') {
            throw new Error('Missing or invalid userId')
        }

        if (!taxInfo || typeof taxInfo !== 'object') {
            throw new Error('Missing or invalid taxInfo')
        }

        // Validate required tax info fields
        const requiredFields = ['address', 'year', 'summary', 'transactions']
        for (const field of requiredFields) {
            if (!(field in taxInfo)) {
                throw new Error(`Missing required field: ${field}`)
            }
        }

        // Validate summary fields
        const requiredSummaryFields = [
            'shortTermGains',
            'longTermGains',
            'totalIncome',
            'totalFees',
            'stateTax',
            'stateCode',
            'effectiveStateTaxRate',
            'taxableEvents'
        ]

        for (const field of requiredSummaryFields) {
            if (!(field in taxInfo.summary)) {
                throw new Error(`Missing required summary field: ${field}`)
            }
        }

        // Validate transactions array
        if (!Array.isArray(taxInfo.transactions)) {
            throw new Error('Transactions must be an array')
        }

        // Validate transaction fields if there are any transactions
        if (taxInfo.transactions.length > 0) {
            const requiredTransactionFields = ['type', 'timestamp', 'amount', 'price']
            for (const transaction of taxInfo.transactions) {
                for (const field of requiredTransactionFields) {
                    if (!(field in transaction)) {
                        throw new Error(`Missing required transaction field: ${field}`)
                    }
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
            userId: userId,
            lastModified: timestamp,
            status: 'completed'
        }

        // Save tax data to Firestore
        await db.collection('User').doc(userId).collection('TaxData').doc(taxInfo.year.toString()).set(taxData)

        return {
            success: true,
            message: 'Tax data saved successfully',
            data: {
                year: taxInfo.year,
                timestamp: timestamp.toDate()
            }
        }
    } catch (error) {
        console.error('Error saving tax data:', error)
        throw new Error(error instanceof Error ? error.message : 'Failed to save data to database')
    }
})

export const processTaxData = onCall(async (request) => {
    try {
        const { userId, year } = request.data

        // Validate request data
        if (!userId || typeof userId !== 'string') {
            throw new Error('Missing or invalid userId')
        }

        if (!year || typeof year !== 'number') {
            throw new Error('Missing or invalid year')
        }

        const db = admin.firestore()
        const taxDataRef = db.collection('User').doc(userId).collection('TaxData').doc(year.toString())
        const taxData = await taxDataRef.get()

        if (!taxData.exists) {
            throw new Error('Tax data not found')
        }

        return {
            success: true,
            data: taxData.data()
        }
    } catch (error) {
        console.error('Error processing tax data:', error)
        throw new Error(error instanceof Error ? error.message : 'Failed to process tax data')
    }
}) 