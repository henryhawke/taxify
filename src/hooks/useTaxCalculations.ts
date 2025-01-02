import { useState, useCallback } from 'react'
import { TransactionClassifier } from '@/services/tax/TransactionClassifier'
import { CostBasisCalculator, CostBasisMethod } from '@/services/tax/CostBasisCalculator'
import { TransactionData } from '@/services/solana/TransactionCollectionService'

export function useTaxCalculations() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [taxableEvents, setTaxableEvents] = useState<any[]>([])
  
  const processTransactions = useCallback(async (
    transactions: TransactionData[],
    costBasisMethod: CostBasisMethod = CostBasisMethod.FIFO
  ) => {
    setIsProcessing(true)
    
    try {
      const classifier = new TransactionClassifier()
      const calculator = new CostBasisCalculator(costBasisMethod)
      
      const processedEvents = []
      
      for (const tx of transactions) {
        const classification = await classifier.classifyTransaction(tx)
        
        if (classification.type === TaxEventType.CAPITAL_GAIN_SHORT || 
            classification.type === TaxEventType.CAPITAL_GAIN_LONG) {
          const gainLoss = await calculator.calculateGainLoss(tx)
          
          processedEvents.push({
            transaction: tx,
            classification,
            gainLoss
          })
        } else {
          processedEvents.push({
            transaction: tx,
            classification
          })
        }
      }
      
      setTaxableEvents(processedEvents)
    } catch (error) {
      console.error('Error processing transactions:', error)
    } finally {
      setIsProcessing(false)
    }
  }, [])

  return {
    processTransactions,
    isProcessing,
    taxableEvents
  }
} 