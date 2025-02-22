export type TaxableEvent = {
    type: 'sale' | 'purchase' | 'transfer' | 'staking_reward' | 'airdrop' | 'nft_sale' | 'nft_purchase'
    timestamp: number
    amount: number
    price: number
    fee?: number
    stateCode?: string
}

export interface TaxSummary {
    shortTermGains: number
    longTermGains: number
    totalIncome: number
    totalFees: number
    stateTax: number
    stateCode: string
    effectiveStateTaxRate: number
    taxableEvents: TaxableEvent[]
}

export type WalletTaxInfo = {
    address: string
    transactions: TaxableEvent[]
    summary: TaxSummary
    year: number
}

export type TaxGuidance = {
    category: string
    description: string
    irsReference: string
    url: string
} 