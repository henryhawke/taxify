import { TaxTransaction, requiredFieldsByType } from '@/common/models/taxModels'

export class TransactionValidator {
    static validate(transaction: TaxTransaction): { valid: boolean; errors: string[] } {
        const errors: string[] = []

        // Check required fields for transaction type
        const requiredFields = requiredFieldsByType[transaction.type]
        if (!requiredFields) {
            errors.push(`Invalid transaction type: ${transaction.type}`)
            return { valid: false, errors }
        }

        for (const field of requiredFields) {
            if (!(field in transaction) || transaction[field as keyof TaxTransaction] === undefined) {
                errors.push(`Missing required field for ${transaction.type}: ${field}`)
            }
        }

        // Validate amounts are positive
        if (transaction.amount <= 0) {
            errors.push('Amount must be positive')
        }

        // Validate specific transaction types
        switch (transaction.type) {
            case 'SALE':
                if (transaction.saleAmount && transaction.saleAmount <= 0) {
                    errors.push('Sale amount must be positive')
                }
                break
            case 'EXCHANGE':
                if (transaction.receivedAmount && transaction.receivedAmount <= 0) {
                    errors.push('Received amount must be positive')
                }
                break
        }

        return {
            valid: errors.length === 0,
            errors
        }
    }
} 