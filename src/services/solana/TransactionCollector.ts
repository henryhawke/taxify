import { createSolanaRpc } from '@solana/rpc'
import { getSignaturesForAddress } from '@solana/rpc-api'
import { Address } from '@solana/web3.js'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'

export class TransactionCollector {
    private rpc: ReturnType<typeof createSolanaRpc>

    constructor(rpcUrl: string, private walletAddress: string) {
        this.rpc = createSolanaRpc({ url: rpcUrl })
    }

    async getAllTransactions() {
        // Convert address string to Address type
        const address = new Address(this.walletAddress)

        // Get all signatures using new RPC API
        const signatures = await this.rpc.call(
            getSignaturesForAddress({ address })
        )

        // Get NFT transactions
        const nftAssets = await fetchAllDigitalAssetByOwner(address)

        return {
            transfers: signatures,
            nftTransactions: nftAssets
        }
    }
} 