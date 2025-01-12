import * as admin from 'firebase-admin'
import * as taxFunctions from './tax'

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp()
}

// Export tax functions with correct prefixes
export const taxSaveTaxData = taxFunctions.saveTaxData
export const taxProcessTaxData = taxFunctions.processTaxData 