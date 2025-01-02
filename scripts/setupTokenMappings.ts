import { db } from '@/lib/firebase'
import { TokenMapping } from '@/common/types/token'

const COMMON_TOKENS: TokenMapping[] = [
    {
        address: 'So11111111111111111111111111111111111111112',
        coingeckoId: 'solana',
        symbol: 'SOL',
        name: 'Solana',
        platform: 'solana'
    },
    {
        address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        coingeckoId: 'usd-coin',
        symbol: 'USDC',
        name: 'USD Coin',
        platform: 'solana'
    },
    {
        address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
        coingeckoId: 'tether',
        symbol: 'USDT',
        name: 'Tether',
        platform: 'solana'
    },
    {
        address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
        coingeckoId: 'msol',
        symbol: 'mSOL',
        name: 'Marinade staked SOL',
        platform: 'solana'
    },
    {
        address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
        coingeckoId: 'bonk',
        symbol: 'BONK',
        name: 'Bonk',
        platform: 'solana'
    }
]

async function setupTokenMappings() {
    const batch = db.batch()

    for (const token of COMMON_TOKENS) {
        const docRef = db.collection('tokenMappings').doc(token.address.toLowerCase())
        batch.set(docRef, token, { merge: true })
    }

    await batch.commit()
    console.log('Token mappings initialized')
}

setupTokenMappings().catch(console.error) 