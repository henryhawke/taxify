import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { WalletTaxInfo } from '../../../src/types/tax'
import { onCall } from 'firebase-functions/v2/https'

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

type AuthContext = { auth?: { uid: string } }

export const saveTaxData = onCall<SaveTaxDataParams>(async (request) => {
    try {
        const { data, auth } = request
        // Verify authentication
        if (!auth) {
            throw new functions.https.HttpsError(
                'unauthenticated',
                'User must be authenticated to save tax data'
            )
        }

        // Verify user is saving their own data
        if (auth.uid !== data.userId) {
            throw new functions.https.HttpsError(
                'permission-denied',
                'Users can only save their own tax data'
            )
        }

        // Validate required data
        if (!data.taxData || !data.path) {
            throw new functions.https.HttpsError(
                'invalid-argument',
                'Missing required tax data or path'
            )
        }

        // Save to Firestore
        await db.doc(data.path).set({
            ...data.taxData,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true })

        return {
            success: true,
            message: 'Tax data saved successfully'
        }
    } catch (error) {
        console.error('Error saving tax data:', error)
        if (error instanceof functions.https.HttpsError) {
            throw error
        }
        throw new functions.https.HttpsError(
            'internal',
            'Failed to save tax data'
        )
    }
})

export const processTaxData = onCall<ProcessTaxDataParams>(async (request) => {
    try {
        const { data, auth } = request
        // Verify authentication
        if (!auth) {
            throw new functions.https.HttpsError(
                'unauthenticated',
                'User must be authenticated to process tax data'
            )
        }

        // Verify user is processing their own data
        if (auth.uid !== data.userId) {
            throw new functions.https.HttpsError(
                'permission-denied',
                'Users can only process their own tax data'
            )
        }

        // Validate required data
        if (!data.transactions || !data.transactions.length || !data.path) {
            throw new functions.https.HttpsError(
                'invalid-argument',
                'Missing required transactions or path'
            )
        }

        // Process transactions in batches to avoid write limits
        const batch = db.batch()
        const transactionsRef = db.collection(data.path)

        data.transactions.forEach((transaction, index) => {
            // Create new batch every 500 operations (Firestore limit)
            if (index > 0 && index % 500 === 0) {
                batch.commit()
                batch.commit()
            }

            const docRef = transactionsRef.doc()
            batch.set(docRef, {
                ...transaction,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            })
        })

        await batch.commit()

        return {
            success: true,
            message: `Successfully processed ${data.transactions.length} transactions`
        }
    } catch (error) {
        console.error('Error processing tax data:', error)
        if (error instanceof functions.https.HttpsError) {
            throw error
        }
        throw new functions.https.HttpsError(
            'internal',
            'Failed to process tax data'
        )
    }
}) 