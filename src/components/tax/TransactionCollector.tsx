import { useEffect } from 'react'
import { useTransactionCollection } from '@/hooks/useTransactionCollection'

export default function TransactionCollector() {
  const { startCollection, isCollecting, transactions } = useTransactionCollection()

  useEffect(() => {
    // Start collecting transactions from the last 365 days
    const startDate = new Date()
    startDate.setFullYear(startDate.getFullYear() - 1)
    
    const unsubscribe = startCollection(startDate)
    
    return () => {
      unsubscribe?.()
    }
  }, [startCollection])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transaction Collection</h2>
      
      {isCollecting ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900" />
          <span>Collecting transactions...</span>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-600">
            {transactions.length} transactions collected
          </p>
        </div>
      )}
    </div>
  )
} 