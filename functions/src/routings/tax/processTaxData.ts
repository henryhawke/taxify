import { db } from '@/index'
import { getUserAuth } from '@/lib/getUserAuth'
import { TaxTransaction } from '@common/models/taxModels'
import { https } from 'firebase-functions/v1'

interface TaxEvent {
    type: 'CAPITAL_GAIN' | 'INCOME' | 'MINING' | 'STAKING' | 'AIRDROP'
    shortTerm: boolean  // For capital gains: held <= 1 year
    amount: number
    timestamp: number
    basis?: number      // For capital gains
    proceeds?: number   // For capital gains
}

export const processTaxData = https.onCall(async (data, context) => {
    try {
        const user = await getUserAuth(context.rawRequest)
        const { transactions } = data as { transactions: TaxTransaction[] }

        const taxEvents: TaxEvent[] = transactions.map(tx => {
            // Classify transaction based on IRS guidelines
            if (tx.type === 'SALE' || tx.type === 'EXCHANGE') {
                return {
                    type: 'CAPITAL_GAIN',
                    shortTerm: isShortTerm(tx.timestamp),
                    amount: tx.amount,
                    timestamp: tx.timestamp,
                    basis: await calculateBasis(tx),
                    proceeds: await calculateProceeds(tx)
                }
            }

            if (tx.type === 'MINING') {
                return {
                    type: 'MINING',
                    shortTerm: false,
                    amount: tx.amount,
                    timestamp: tx.timestamp
                }
            }

            // Handle other transaction types per IRS rules
            return {
                type: 'INCOME',
                shortTerm: false,
                amount: tx.amount,
                timestamp: tx.timestamp
            }
        })

        // Store processed events
        await db.collection(`users/${user.uid}/taxEvents`).add({
            events: taxEvents,
            processedAt: new Date(),
            taxYear: new Date().getFullYear()
        })

        return {
            success: true,
            taxEvents,
            forms: {
                form8949Required: taxEvents.some(e => e.type === 'CAPITAL_GAIN'),
                schedule1Required: taxEvents.some(e => ['MINING', 'STAKING', 'AIRDROP'].includes(e.type))
            }
        }
    } catch (error) {
        console.error('Error processing tax data:', error)
        throw new https.HttpsError('internal', 'Failed to process tax data')
    }
})

function isShortTerm(timestamp: number): boolean {
    const oneYear = 365 * 24 * 60 * 60 * 1000
    return Date.now() - timestamp <= oneYear
}

async function calculateBasis(tx: TaxTransaction): Promise<number> {
    // For purchased assets: Cost basis = Purchase price + Transaction fees
    if (tx.type === 'PURCHASE') {
        return tx.amount + (tx.fee || 0)
    }

    // For mined assets: Cost basis = Fair market value at time of mining + Mining costs
    if (tx.type === 'MINING') {
        const fmv = await getFairMarketValue(tx.tokenAddress, tx.timestamp)
        return fmv * tx.amount + (tx.miningCosts || 0)
    }

    // For gifts: Cost basis = Lesser of donor's basis or FMV at time of gift
    if (tx.type === 'GIFT') {
        const donorBasis = tx.donorBasis || 0
        const fmv = await getFairMarketValue(tx.tokenAddress, tx.timestamp)
        return Math.min(donorBasis, fmv)
    }

    // For inherited assets: Cost basis = FMV at time of death
    if (tx.type === 'INHERITANCE') {
        return await getFairMarketValue(tx.tokenAddress, tx.timestamp)
    }

    return 0
}

async function calculateProceeds(tx: TaxTransaction): Promise<number> {
    // Proceeds = Sale price - Transaction fees
    if (tx.type === 'SALE') {
        return tx.saleAmount - (tx.fee || 0)
    }

    // For exchanges: Proceeds = FMV of assets received
    if (tx.type === 'EXCHANGE') {
        return await getFairMarketValue(tx.receivedTokenAddress, tx.timestamp) * tx.receivedAmount
    }

    return 0
}

async function getFairMarketValue(tokenAddress: string, timestamp: number): Promise<number> {
    try {
        // Implement price oracle call or historical price lookup
        const priceData = await db
            .collection('tokenPrices')
            .where('token', '==', tokenAddress)
            .where('timestamp', '<=', timestamp)
            .orderBy('timestamp', 'desc')
            .limit(1)
            .get()

        if (!priceData.empty) {
            return priceData.docs[0].data().price
        }

        // Fallback to external price API if needed
        return 0
    } catch (error) {
        console.error('Error getting fair market value:', error)
        return 0
    }
} 