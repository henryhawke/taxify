import { createSolanaRpc } from '@solana/web3.js'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'

export interface TransactionData {
    signature: string
    timestamp: number
    type: 'TRANSFER' | 'NFT' | 'SWAP' | 'STAKE' | 'OTHER'
    amount?: number
    tokenAddress?: string
    fromAddress: string
    toAddress: string
    status: 'confirmed' | 'failed'
    fee: number
}

export class TransactionCollectionService {
    private rpcUrl: string
    private walletAddress: string

    constructor(rpcUrl: string, walletAddress: string) {
        this.rpcUrl = rpcUrl
        this.walletAddress = walletAddress
    }

    async collectHistoricalTransactions(startDate?: Date): Promise<TransactionData[]> {
        const rpc = createSolanaRpc(this.rpcUrl)

        // Get all signatures for address
        const signatures = await rpc.getSignaturesForAddress(this.walletAddress, {
            limit: 1000,
            before: startDate?.toISOString(),
        }).send()

        // Get full transaction details
        const transactions = await Promise.all(
            signatures.map(async (sig) => {
                const tx = await rpc.getTransaction(sig.signature, {
                    maxSupportedTransactionVersion: 0,
                }).send()

                return this.parseTransaction(tx)
            })
        )

        // Store in Firestore
        await this.storeTransactions(transactions)

        return transactions
    }

    async setupRealtimeMonitoring() {
        const rpc = createSolanaRpc(this.rpcUrl)

        // Subscribe to account changes
        const unsubscribe = rpc.accountSubscribe(
            this.walletAddress,
            async (notification) => {
                // When account changes, fetch latest transaction
                const signatures = await rpc.getSignaturesForAddress(this.walletAddress, {
                    limit: 1,
                }).send()

                if (signatures[0]) {
                    const tx = await rpc.getTransaction(signatures[0].signature, {
                        maxSupportedTransactionVersion: 0,
                    }).send()

                    const parsedTx = this.parseTransaction(tx)
                    await this.storeTransactions([parsedTx])
                }
            }
        ).send()

        return unsubscribe
    }

    private async storeTransactions(transactions: TransactionData[]) {
        const txCollection = collection(db, 'transactions')

        for (const tx of transactions) {
            await addDoc(txCollection, {
                ...tx,
                walletAddress: this.walletAddress,
                createdAt: new Date(),
            })
        }
    }

    private parseTransaction(tx: any): TransactionData {
        // Basic transaction parsing
        const parsedTx: TransactionData = {
            signature: tx.transaction.signatures[0],
            timestamp: tx.blockTime,
            type: this.determineTransactionType(tx),
            fromAddress: tx.transaction.message.accountKeys[0],
            toAddress: tx.transaction.message.accountKeys[1],
            status: tx.meta.err ? 'failed' : 'confirmed',
            fee: tx.meta.fee,
        }

        // Add token/NFT specific data if applicable
        if (tx.meta?.postTokenBalances?.length > 0) {
            parsedTx.tokenAddress = tx.meta.postTokenBalances[0].mint
            parsedTx.amount = tx.meta.postTokenBalances[0].uiTokenAmount.uiAmount
        }

        return parsedTx
    }

    private determineTransactionType(tx: any): TransactionData['type'] {
        // Implement transaction type detection logic
        // This is a basic example - would need more sophisticated logic in production
        if (tx.meta?.postTokenBalances?.length > 0) {
            return 'TRANSFER'
        }
        // Check for NFT program IDs
        if (tx.transaction.message.accountKeys.includes('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')) {
            return 'NFT'
        }
        return 'OTHER'
    }
} 