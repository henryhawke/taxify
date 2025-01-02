import { Timestamp, FieldValue } from 'firebase/firestore'

export type TransactionType =
    | 'PURCHASE'
    | 'SALE'
    | 'EXCHANGE'
    | 'MINING'
    | 'GIFT'
    | 'INHERITANCE'
    | 'STAKING'
    | 'AIRDROP'

export interface TaxTransaction {
    id?: string
    userId: string
    type: TransactionType
    amount: number
    timestamp: Timestamp | FieldValue
    status: 'pending' | 'processed' | 'error'

    // Asset details
    tokenAddress: string
    tokenSymbol?: string
    tokenDecimals?: number

    // Transaction specifics
    fee?: number
    miningCosts?: number
    donorBasis?: number
    saleAmount?: number
    receivedTokenAddress?: string
    receivedAmount?: number

    // Validation and metadata
    hash: string
    blockNumber: number
    validated: boolean
}

export const genTaxTransactionPath = (userId: string) =>
    `users/${userId}/transactions`

// Validation schema for required fields by type
export const requiredFieldsByType: Record<TransactionType, string[]> = {
    PURCHASE: ['amount', 'tokenAddress', 'fee'],
    SALE: ['amount', 'tokenAddress', 'saleAmount', 'fee'],
    EXCHANGE: ['amount', 'tokenAddress', 'receivedTokenAddress', 'receivedAmount'],
    MINING: ['amount', 'tokenAddress', 'miningCosts'],
    GIFT: ['amount', 'tokenAddress', 'donorBasis'],
    INHERITANCE: ['amount', 'tokenAddress'],
    STAKING: ['amount', 'tokenAddress'],
    AIRDROP: ['amount', 'tokenAddress']
} 