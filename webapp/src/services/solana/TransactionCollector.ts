import { Connection, PublicKey } from '@solana/web3.js'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'

export class TransactionCollector {
    private connection: Connection

    constructor(rpcUrl: string, private walletAddress: string) {
        this.connection = new Connection(rpcUrl)
    }

    async getAllTransactions() {
        const publicKey = new PublicKey(this.walletAddress)

        // Get all signatures
        const signatures = await this.connection.getSignaturesForAddress(publicKey)

        // Get NFT transactions
        const nftAssets = await fetchAllDigitalAssetByOwner(this.connection, publicKey)

        return {
            transfers: signatures,
            nftTransactions: nftAssets
        }
    }
} 