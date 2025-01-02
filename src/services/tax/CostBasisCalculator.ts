import { TransactionData } from '@/services/solana/TransactionCollectionService'
import { PriceOracle } from '../oracle/PriceOracle'
import { RiskAssessor } from './RiskAssessor'

export enum CostBasisMethod {
    FIFO = 'FIFO',
    LIFO = 'LIFO',
    HIFO = 'HIFO', // Highest In, First Out
    SPECIFIC_ID = 'SPECIFIC_ID'
}

interface LotTrackingEntry {
    id: string
    acquisitionDate: Date
    amount: number
    costBasis: number
    remainingAmount: number
    transactionId: string
    pricePerUnit: number
    source: 'PURCHASE' | 'TRANSFER' | 'MINING' | 'STAKING' | 'AIRDROP'
    riskScore: number
}

export class CostBasisCalculator {
    private lots: Map<string, LotTrackingEntry[]> = new Map()
    private method: CostBasisMethod
    private priceOracle: PriceOracle
    private riskAssessor: RiskAssessor

    constructor(
        method: CostBasisMethod = CostBasisMethod.FIFO,
        priceOracle: PriceOracle,
        riskAssessor: RiskAssessor
    ) {
        this.method = method
        this.priceOracle = priceOracle
        this.riskAssessor = riskAssessor
    }

    async addAcquisition(transaction: TransactionData, source?: LotTrackingEntry['source']) {
        const token = transaction.tokenAddress || 'SOL'
        if (!this.lots.has(token)) {
            this.lots.set(token, [])
        }

        const priceAtAcquisition = await this.priceOracle.getHistoricalPrice(
            token,
            transaction.timestamp
        )

        const riskScore = await this.riskAssessor.assessTransaction(transaction)

        const lotEntry: LotTrackingEntry = {
            id: `${transaction.signature}-${Date.now()}`,
            acquisitionDate: new Date(transaction.timestamp * 1000),
            amount: transaction.amount || 0,
            costBasis: await this.getTransactionValue(transaction),
            remainingAmount: transaction.amount || 0,
            transactionId: transaction.signature,
            pricePerUnit: priceAtAcquisition,
            source: source || 'PURCHASE',
            riskScore
        }

        this.lots.get(token)!.push(lotEntry)

        // Sort lots based on method
        this.sortLots(token)
    }

    private sortLots(token: string) {
        const lots = this.lots.get(token)!
        switch (this.method) {
            case CostBasisMethod.FIFO:
                lots.sort((a, b) => a.acquisitionDate.getTime() - b.acquisitionDate.getTime())
                break
            case CostBasisMethod.LIFO:
                lots.sort((a, b) => b.acquisitionDate.getTime() - a.acquisitionDate.getTime())
                break
            case CostBasisMethod.HIFO:
                lots.sort((a, b) => b.pricePerUnit - a.pricePerUnit)
                break
        }
    }

    async calculateGainLoss(disposal: TransactionData): Promise<{
        gainLoss: number
        shortTerm: boolean
        costBasis: number
        proceeds: number
        riskAssessment: {
            score: number
            factors: string[]
        }
    }> {
        const proceeds = await this.calculateProceeds(disposal)
        const { costBasis, shortTerm, usedLots } = await this.determineCostBasis(
            disposal.tokenAddress || 'SOL',
            disposal.amount || 0,
            disposal.timestamp
        )

        const riskAssessment = await this.riskAssessor.assessDisposal({
            disposal,
            lots: usedLots,
            gainLoss: proceeds - costBasis
        })

        return {
            gainLoss: proceeds - costBasis,
            shortTerm,
            costBasis,
            proceeds,
            riskAssessment
        }
    }

    async getLotHistory(token: string): Promise<LotTrackingEntry[]> {
        return this.lots.get(token) || []
    }

    async getWashSaleExposure(token: string, disposalDate: number): Promise<{
        exposedLots: LotTrackingEntry[]
        potentialDisallowedLoss: number
    }> {
        const lots = this.lots.get(token) || []
        const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000
        const disposalDateMs = disposalDate * 1000

        const exposedLots = lots.filter(lot => {
            const timeDiff = Math.abs(lot.acquisitionDate.getTime() - disposalDateMs)
            return timeDiff <= thirtyDaysMs
        })

        const potentialDisallowedLoss = exposedLots.reduce(
            (sum, lot) => sum + (lot.costBasis - lot.pricePerUnit * lot.amount),
            0
        )

        return {
            exposedLots,
            potentialDisallowedLoss
        }
    }
} 