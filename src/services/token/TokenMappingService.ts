import { db } from '@/lib/firebase'
import { TokenMapping } from '@/common/types/token'

export class TokenMappingService {
    private static instance: TokenMappingService
    private cache: Map<string, TokenMapping> = new Map()

    private constructor() { }

    static getInstance(): TokenMappingService {
        if (!TokenMappingService.instance) {
            TokenMappingService.instance = new TokenMappingService()
        }
        return TokenMappingService.instance
    }

    async getMapping(address: string): Promise<TokenMapping | null> {
        const normalizedAddress = address.toLowerCase()

        // Check cache first
        if (this.cache.has(normalizedAddress)) {
            return this.cache.get(normalizedAddress) || null
        }

        // Check Firestore
        const doc = await db
            .collection('tokenMappings')
            .doc(normalizedAddress)
            .get()

        if (doc.exists) {
            const mapping = doc.data() as TokenMapping
            this.cache.set(normalizedAddress, mapping)
            return mapping
        }

        return null
    }

    async addMapping(mapping: TokenMapping): Promise<void> {
        const normalizedAddress = mapping.address.toLowerCase()
        await db
            .collection('tokenMappings')
            .doc(normalizedAddress)
            .set(mapping, { merge: true })

        this.cache.set(normalizedAddress, mapping)
    }
} 