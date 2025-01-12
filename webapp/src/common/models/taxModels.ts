import { Timestamp, FieldValue } from 'firebase/firestore'
import { TaxSummary, TaxableEvent } from '@/types/tax'

export interface TaxTransaction {
    id?: string
    userId: string
    type: string
    amount: number
    timestamp: Timestamp | FieldValue
    status: 'pending' | 'processed' | 'error'
}

export interface UserTaxData {
    userId: string
    walletAddress: string
    year: number
    summary: TaxSummary
    transactions: TaxableEvent[]
    createdAt: Timestamp | FieldValue
    updatedAt: Timestamp | FieldValue
}

export const genTaxTransactionPath = (userId: string) =>
    `users/${userId}/transactions`

export const genUserTaxDataPath = (userId: string) =>
    `users/${userId}/taxData` 