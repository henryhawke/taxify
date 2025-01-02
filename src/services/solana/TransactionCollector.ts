import { createSolanaRpc } from '@solana/web3.js'
import { fetchAllDigitalAssetByOwner } from '@metaplex-foundation/mpl-token-metadata'

export class TransactionCollector {
  constructor(private rpcUrl: string, private walletAddress: string) {}

  async getAllTransactions() {
    const rpc = createSolanaRpc(this.rpcUrl)
    
    // Get all token transfers
    const signatures = await rpc.getSignaturesForAddress(this.walletAddress).send()
    
    // Get NFT transactions
    const nftAssets = await fetchAllDigitalAssetByOwner(this.walletAddress)
    
    return {
      transfers: signatures,
      nftTransactions: nftAssets
    }
  }
} 