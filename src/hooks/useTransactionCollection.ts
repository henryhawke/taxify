import { useState, useCallback } from 'react'
import { TransactionCollectionService, TransactionData } from '@/services/solana/TransactionCollectionService'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

export function useTransactionCollection() {
    const { connection } = useConnection()
    const { publicKey } = useWallet()
    const [isCollecting, setIsCollecting] = useState(false)
    const [transactions, setTransactions] = useState<TransactionData[]>([])

    const startCollection = useCallback(async (startDate?: Date) => {
        if (!publicKey) return

        setIsCollecting(true)
        try {
            const service = new TransactionCollectionService(
                connection.rpcEndpoint,
                publicKey.toBase58()
            )

            // Collect historical transactions
            const historicalTxs = await service.collectHistoricalTransactions(startDate)
            setTransactions(historicalTxs)

            // Setup real-time monitoring
            const unsubscribe = await service.setupRealtimeMonitoring()

            return unsubscribe
        } catch (error) {
            console.error('Error collecting transactions:', error)
        } finally {
            setIsCollecting(false)
        }
    }, [connection, publicKey])

    return {
        startCollection,
        isCollecting,
        transactions
    }
} 