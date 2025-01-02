import { TaxOptimizer } from '@/services/ai/TaxOptimizer'
import { mockTransactions, mockLots } from '../mocks/taxData'

describe('Tax Optimization Integration', () => {
  let optimizer: TaxOptimizer

  beforeEach(() => {
    optimizer = new TaxOptimizer()
  })

  test('generates valid optimization suggestions', async () => {
    const suggestions = await optimizer.generateOptimizations(
      mockTransactions,
      mockLots,
      2024
    )

    expect(suggestions).toBeInstanceOf(Array)
    expect(suggestions.length).toBeGreaterThan(0)

    suggestions.forEach(suggestion => {
      expect(suggestion).toMatchObject({
        type: expect.any(String),
        description: expect.any(String),
        potentialSavings: expect.any(Number),
        riskLevel: expect.any(String),
        implementationSteps: expect.any(Array)
      })
    })
  })
}) 