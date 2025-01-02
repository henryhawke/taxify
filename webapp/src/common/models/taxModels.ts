import { Timestamp, FieldValue } from 'firebase/firestore'

export interface TaxTransaction {
    id?: string
    userId: string
    type: string
    amount: number
    timestamp: Timestamp | FieldValue
    status: 'pending' | 'processed' | 'error'
}

export const genTaxTransactionPath = (userId: string) =>
    `users/${userId}/transactions` 