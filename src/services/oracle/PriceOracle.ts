import { db } from '@/lib/firebase'
import axios from 'axios'

interface CoinGeckoPrice {
    [key: string]: { usd: number }
}

export class PriceOracle {
    private static instance: PriceOracle
    private cache: Map<string, Map<number, number>> = new Map()
    private readonly COINGECKO_API = 'https://api.coingecko.com/api/v3'

    private constructor() { }

    static getInstance(): PriceOracle {
        if (!PriceOracle.instance) {
            PriceOracle.instance = new PriceOracle()
        }
        return PriceOracle.instance
    }

    async getHistoricalPrice(tokenAddress: string, timestamp: number): Promise<number> {
        // Check cache first
        const tokenCache = this.cache.get(tokenAddress)
        if (tokenCache?.has(timestamp)) {
            return tokenCache.get(timestamp) || 0
        }

        try {
            // Try Firestore first
            const price = await this.getFirestorePrice(tokenAddress, timestamp)
            if (price > 0) return price

            // Fallback to CoinGecko or similar API
            return await this.getExternalPrice(tokenAddress, timestamp)
        } catch (error) {
            console.error('Error fetching price:', error)
            return 0
        }
    }

    private async getFirestorePrice(tokenAddress: string, timestamp: number): Promise<number> {
        const priceData = await db
            .collection('tokenPrices')
            .where('token', '==', tokenAddress)
            .where('timestamp', '<=', timestamp)
            .orderBy('timestamp', 'desc')
            .limit(1)
            .get()

        if (!priceData.empty) {
            const price = priceData.docs[0].data().price
            this.cachePrice(tokenAddress, timestamp, price)
            return price
        }

        return 0
    }

    private async getExternalPrice(tokenAddress: string, timestamp: number): Promise<number> {
        try {
            const date = new Date(timestamp * 1000).toISOString().split('T')[0]

            // Get token ID from address mapping
            const tokenId = await this.getTokenId(tokenAddress)
            if (!tokenId) return 0

            const response = await axios.get(
                `${this.COINGECKO_API}/coins/${tokenId}/history`,
                {
                    params: {
                        date,
                        localization: false
                    }
                }
            )

            if (response.data?.market_data?.current_price?.usd) {
                const price = response.data.market_data.current_price.usd
                this.cachePrice(tokenAddress, timestamp, price)
                return price
            }

            return 0
        } catch (error) {
            console.error('CoinGecko API error:', error)
            return 0
        }
    }

    private async getTokenId(tokenAddress: string): Promise<string | null> {
        // First check Firestore for known mapping
        const mapping = await db
            .collection('tokenMappings')
            .doc(tokenAddress.toLowerCase())
            .get()

        if (mapping.exists) {
            return mapping.data()?.coingeckoId
        }

        return null
    }

    private cachePrice(tokenAddress: string, timestamp: number, price: number) {
        if (!this.cache.has(tokenAddress)) {
            this.cache.set(tokenAddress, new Map())
        }
        this.cache.get(tokenAddress)?.set(timestamp, price)
    }
} 