export interface TaxableEvent {
  transaction: TransactionData
  lots?: LotTrackingEntry[]
  classification?: {
    type: TaxEventType
    confidence: number
    reasoning: string
  }
  gainLoss?: {
    gainLoss: number
    shortTerm: boolean
    costBasis: number
    proceeds: number
  }
}

export interface OptimizationSuggestion {
  type: 'HARVEST_LOSS' | 'TIMING' | 'PORTFOLIO_STRUCTURE' | 'DEFI_STRATEGY'
  description: string
  potentialSavings: number
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH'
  implementationSteps: string[]
  deadline?: Date
} 