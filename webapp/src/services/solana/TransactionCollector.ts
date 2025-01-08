import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { Connection, PublicKey } from '@solana/web3.js'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'
import { publicKey } from '@metaplex-foundation/umi'

export class TransactionCollector {
    private connection: Connection

    constructor(connection: Connection) {
        this.connection = connection
    }

    async collect(walletPublicKey: PublicKey) {
        // Get all signatures
        const signatures = await this.connection.getSignaturesForAddress(walletPublicKey)

        // Create Umi instance
        const umi = createUmi(this.connection.rpcEndpoint)

        // Get NFT transactions
        const nftAssets = await fetchAllDigitalAssetByOwner(umi, publicKey(walletPublicKey.toBase58()))

        return {
            transfers: signatures,
            nftAssets
        }
    }
} 