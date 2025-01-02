import { TaxableEvent } from '../types'

interface ValidationResult {
    isValid: boolean
    errors: string[]
}

export class FormValidator {
    validateForm8949Data(events: TaxableEvent[]): ValidationResult {
        const errors: string[] = []

        // Check required fields
        events.forEach((event, index) => {
            if (!event.transaction.timestamp) {
                errors.push(`Missing date for transaction ${index + 1}`)
            }
            if (!event.gainLoss?.proceeds) {
                errors.push(`Missing proceeds for transaction ${index + 1}`)
            }
            if (!event.gainLoss?.costBasis) {
                errors.push(`Missing cost basis for transaction ${index + 1}`)
            }
        })

        // Validate totals
        const totalProceeds = events.reduce((sum, event) => sum + (event.gainLoss?.proceeds || 0), 0)
        if (totalProceeds <= 0) {
            errors.push('Total proceeds must be greater than zero')
        }

        return {
            isValid: errors.length === 0,
            errors
        }
    }
} 