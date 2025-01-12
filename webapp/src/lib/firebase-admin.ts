import * as admin from 'firebase-admin'
import { cert } from 'firebase-admin/app'

function validateEnvVariables() {
    const required = [
        'FIREBASE_PROJECT_ID',
        'FIREBASE_CLIENT_EMAIL',
        'FIREBASE_PRIVATE_KEY'
    ]

    for (const variable of required) {
        if (!process.env[variable]) {
            throw new Error(`Missing required environment variable: ${variable}`)
        }
    }
}

export function initAdmin() {
    try {
        validateEnvVariables()

        if (admin.apps.length === 0) {
           

            admin.initializeApp({
                credential: cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                }),
                databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
            })
        }
    } catch (error) {
        console.error('Failed to initialize Firebase Admin:', error)
        throw error
    }
} 