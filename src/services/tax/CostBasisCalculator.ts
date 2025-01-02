export class CostBasisCalculator {
    calculateGainLoss(acquisition: Transaction, disposal: Transaction) {
        const costBasis = this.determineCostBasis(acquisition)
        const proceeds = this.calculateProceeds(disposal)

        return {
            gainLoss: proceeds - costBasis,
            holdingPeriod: this.calculateHoldingPeriod(acquisition, disposal)
        }
    }

    private determineCostBasis(transaction: Transaction) {
        // Implement FIFO, LIFO, or specific identification methods
    }
} 