import { useState, useCallback } from 'react'
import { ComplianceValidator } from '@/services/tax/ComplianceValidator'
import { RiskAssessor } from '@/services/tax/RiskAssessor'
import { TransactionData } from '@/services/solana/TransactionCollectionService'

export function useComplianceAndRisk() {
    const [complianceResults, setComplianceResults] = useState<any[]>([])
    const [riskAssessments, setRiskAssessments] = useState<any[]>([])

    const assessTransaction = useCallback(async (
        transaction: TransactionData,
        lots: any[]
    ) => {
        const validator = new ComplianceValidator()
        const assessor = new RiskAssessor()

        const [compliance, risk] = await Promise.all([
            validator.validateTransaction(transaction, lots),
            assessor.assessTransaction(transaction)
        ])

        setComplianceResults(prev => [...prev, compliance])
        setRiskAssessments(prev => [...prev, risk])

        return { compliance, risk }
    }, [])

    return {
        assessTransaction,
        complianceResults,
        riskAssessments
    }
} 