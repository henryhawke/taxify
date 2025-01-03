import {
    createSolanaRpc,
    Address,
    Transaction,
    getTransaction
} from '@solana/web3.js'
import { fromVersionedTransaction } from '@solana/compat'

export class TransactionProcessingService {
    private rpc: ReturnType<typeof createSolanaRpc>

    constructor(rpcUrl: string) {
        this.rpc = createSolanaRpc({ url: rpcUrl })
    }

    async processTransaction(signature: string): Promise<Transaction> {
        const tx = await this.rpc.call(
            getTransaction({
                signature,
                maxSupportedTransactionVersion: 0,
            })
        )

        // Convert legacy transaction to new format if needed
        return fromVersionedTransaction(tx)
    }
} 