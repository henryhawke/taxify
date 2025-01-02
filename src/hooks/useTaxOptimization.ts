import { useState, useCallback } from 'react'
import { TaxOptimizer } from '@/services/ai/TaxOptimizer'
import { TransactionData } from '@/services/solana/TransactionCollectionService'
import { LotTrackingEntry } from '@/services/tax/CostBasisCalculator'

interface OptimizationError {
  message: string
  code: string
}

export function useTaxOptimization() {
  const [optimizations, setOptimizations] = useState<any[]>([])
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [error, setError] = useState<OptimizationError | null>(null)

  const generateOptimizations = useCallback(async (
    transactions: TransactionData[],
    lots: LotTrackingEntry[],
    taxYear: number
  ) => {
    setIsOptimizing(true)
    setError(null)
    
    try {
      const optimizer = new TaxOptimizer()
      const suggestions = await optimizer.generateOptimizations(
        transactions,
        lots,
        taxYear
      )
      setOptimizations(suggestions)
      return suggestions
    } catch (error) {
      const optimizationError: OptimizationError = {
        message: error.message || 'Failed to generate optimizations',
        code: 'OPTIMIZATION_ERROR'
      }
      setError(optimizationError)
      console.error('Error generating tax optimizations:', error)
      return []
    } finally {
      setIsOptimizing(false)
    }
  }, [])

  return {
    generateOptimizations,
    optimizations,
    isOptimizing,
    error
  }
} 