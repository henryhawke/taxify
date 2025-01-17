import { onCall, HttpsError } from 'firebase-functions/v2/https'
import * as admin from 'firebase-admin'
import { WalletTaxInfo } from '../../../src/types/tax'

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
    admin.initializeApp()
}

const db = admin.firestore()

interface SaveTaxDataParams {
    userId: string
    taxData: WalletTaxInfo & {
        createdAt: FirebaseFirestore.Timestamp
        updatedAt: FirebaseFirestore.Timestamp
    }
    path: string
}

interface ProcessTaxDataParams {
    userId: string
    transactions: any[]
    path: string
    createdAt: FirebaseFirestore.Timestamp
}

export const saveTaxData = onCall<SaveTaxDataParams>({
    enforceAppCheck: false,
    timeoutSeconds: 60,
    memory: '256MiB',
}, async (request) => {
    try {
        const { data, auth } = request
        // Verify authentication
        if (!auth) {
            throw new HttpsError(
                'unauthenticated',
                'User must be authenticated to save tax data'
            )
        }

        // Verify user is saving their own data
        if (auth.uid !== data.userId) {
            throw new HttpsError(
                'permission-denied',
                'Users can only save their own tax data'
            )
        }

        // Validate required data
        if (!data.taxData || !data.path) {
            throw new HttpsError(
                'invalid-argument',
                'Missing required tax data or path'
            )
        }

        // Save to Firestore
        try {
            await db.doc(data.path).set({
                ...data.taxData,
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            }, { merge: true })
        } catch (dbError) {
            console.error('Firestore error:', dbError)
            throw new HttpsError(
                'internal',
                'Failed to save data to database'
            )
        }

        return {
            success: true,
            message: 'Tax data saved successfully'
        }
    } catch (error) {
        console.error('Error saving tax data:', error)
        if (error instanceof HttpsError) {
            throw error
        }
        throw new HttpsError(
            'internal',
            'Internal server error. Please try again later.'
        )
    }
})

export const processTaxData = onCall<ProcessTaxDataParams>({
    enforceAppCheck: false,
    timeoutSeconds: 60,
    memory: '256MiB',
}, async (request) => {
    try {
        const { data, auth } = request
        // Verify authentication
        if (!auth) {
            throw new HttpsError(
                'unauthenticated',
                'User must be authenticated to process tax data'
            )
        }

        // Verify user is processing their own data
        if (auth.uid !== data.userId) {
            throw new HttpsError(
                'permission-denied',
                'Users can only process their own tax data'
            )
        }

        // Validate required data
        if (!data.transactions || !data.transactions.length || !data.path) {
            throw new HttpsError(
                'invalid-argument',
                'Missing required transactions or path'
            )
        }

        return {
            success: true,
            message: 'Tax data processed successfully'
        }
    } catch (error) {
        console.error('Error processing tax data:', error)
        if (error instanceof HttpsError) {
            throw error
        }
        throw new HttpsError(
            'internal',
            'Internal server error. Please try again later.'
        )
    }
}) 