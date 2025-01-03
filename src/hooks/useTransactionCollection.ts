import { useState, useCallback } from 'react'
import { Address } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { TransactionCollector } from '@/services/solana/TransactionCollector'

export function useTransactionCollection() {
    const { connection } = useConnection()
    const { publicKey } = useWallet()
    const [isCollecting, setIsCollecting] = useState(false)
    const [transactions, setTransactions] = useState([])

    const startCollection = useCallback(async (startDate?: Date) => {
        if (!publicKey) return

        setIsCollecting(true)
        try {
            const address = new Address(publicKey.toBase58())
            const collector = new TransactionCollector(
                connection.rpcEndpoint,
                address.toString()
            )

            const result = await collector.getAllTransactions()
            setTransactions(result.transfers)

            return () => {
                // Cleanup if needed
            }
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