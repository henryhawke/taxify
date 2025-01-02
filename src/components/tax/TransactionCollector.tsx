import { useEffect } from 'react'
import { useTransactionCollection } from '@/hooks/useTransactionCollection'
import { useTaxCalculations } from '@/hooks/useTaxCalculations'
import { CostBasisMethod } from '@/services/tax/CostBasisCalculator'

export default function TransactionCollector() {
  const { startCollection, isCollecting, transactions } =
    useTransactionCollection()
  const { processTransactions, isProcessing, taxableEvents } =
    useTaxCalculations()

  useEffect(() => {
    // Start collecting transactions from the last 365 days
    const startDate = new Date()
    startDate.setFullYear(startDate.getFullYear() - 1)

    const unsubscribe = startCollection(startDate)

    return () => {
      unsubscribe?.()
    }
  }, [startCollection])

  useEffect(() => {
    if (transactions.length > 0 && !isProcessing) {
      processTransactions(transactions, CostBasisMethod.FIFO)
    }
  }, [transactions, processTransactions])

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Transaction Analysis</h2>

      {isCollecting || isProcessing ? (
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-gray-900" />
          <span>
            {isCollecting
              ? 'Collecting transactions...'
              : 'Processing transactions...'}
          </span>
        </div>
      ) : (
        <div>
          <p className="mb-2 text-sm text-gray-600">
            {transactions.length} transactions collected
          </p>
          <p className="text-sm text-gray-600">
            {taxableEvents.length} taxable events identified
          </p>
        </div>
      )}
    </div>
  )
}
