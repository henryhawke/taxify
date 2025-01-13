import * as admin from 'firebase-admin'
import * as taxFunctions from './tax'
import * as functions from 'firebase-functions'

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp()
}

// Export tax functions with correct prefixes
export const taxSaveTaxData = taxFunctions.saveTaxData
export const taxProcessTaxData = taxFunctions.processTaxData

// Next.js API handler
export const nextApi = functions.https.onRequest(async (req, res) => {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') {
        res.status(204).send('')
        return
    }

    // Handle authentication endpoint
    if (req.path === '/auth/phantom' && req.method === 'POST') {
        try {
            const { publicKey, signature, nonce } = req.body

            if (!publicKey || !signature || !nonce) {
                res.status(400).json({ error: 'Missing required fields' })
                return
            }

            // Create Firebase custom token
            const customToken = await admin.auth().createCustomToken(publicKey, {
                walletProvider: 'phantom',
            })

            res.status(200).json({ token: customToken })
            return
        } catch (error) {
            console.error('Authentication error:', error)
            res.status(500).json({ error: 'Internal server error' })
            return
        }
    }

    // Handle other API routes here if needed
    res.status(404).json({ error: 'Not found' })
    return
}) 