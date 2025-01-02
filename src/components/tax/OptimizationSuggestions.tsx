import { useState } from 'react'
import { useTaxOptimization } from '@/hooks/useTaxOptimization'
import { useTaxCalculations } from '@/hooks/useTaxCalculations'

export default function OptimizationSuggestions() {
  const { generateOptimizations, optimizations, isOptimizing, error } =
    useTaxOptimization()
  const { taxableEvents } = useTaxCalculations()
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const handleOptimize = async () => {
    const transactions = taxableEvents.map((event) => event.transaction)
    const lots = taxableEvents.flatMap((event) => event.lots || [])
    await generateOptimizations(transactions, lots, selectedYear)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Tax Optimization Suggestions</h2>

        <div className="flex items-center space-x-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="rounded-md border-gray-300"
          >
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </select>

          <button
            onClick={handleOptimize}
            disabled={isOptimizing || taxableEvents.length === 0}
            className={`
              rounded-md px-4 py-2 text-white
              ${
                isOptimizing || taxableEvents.length === 0
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-green-600 hover:bg-green-700'
              }
            `}
          >
            {isOptimizing ? 'Analyzing...' : 'Optimize Tax Position'}
          </button>
        </div>
      </div>

      {optimizations.length > 0 && (
        <div className="space-y-4">
          {optimizations.map((suggestion, index) => (
            <div
              key={index}
              className="space-y-2 rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{suggestion.description}</h3>
                <span
                  className={`
                  rounded px-2 py-1 text-sm
                  ${
                    suggestion.riskLevel === 'LOW'
                      ? 'bg-green-100 text-green-800'
                      : suggestion.riskLevel === 'MEDIUM'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }
                `}
                >
                  {suggestion.riskLevel} Risk
                </span>
              </div>

              <p className="font-medium text-green-600">
                Potential Savings: ${suggestion.potentialSavings.toFixed(2)}
              </p>

              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700">
                  Implementation Steps:
                </p>
                <ul className="list-inside list-disc pl-4 text-sm text-gray-600">
                  {suggestion.implementationSteps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>

              {suggestion.deadline && (
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(suggestion.deadline).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-red-600">{error.message}</p>
        </div>
      )}
    </div>
  )
}
