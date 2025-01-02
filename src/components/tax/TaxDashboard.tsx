import { useState } from 'react'
import TransactionCollector from './TransactionCollector'
import TaxFormDownloader from './TaxFormDownloader'
import OptimizationSuggestions from './OptimizationSuggestions'
import { useTaxCalculations } from '@/hooks/useTaxCalculations'

export default function TaxDashboard() {
  const { taxableEvents } = useTaxCalculations()

  return (
    <div className="mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-2xl font-bold">Solana Tax Dashboard</h1>

      <div className="space-y-8">
        <TransactionCollector />

        <div className="border-t pt-8">
          <TaxFormDownloader taxableEvents={taxableEvents} />
        </div>

        <div className="border-t pt-8">
          <OptimizationSuggestions />
        </div>
      </div>
    </div>
  )
}
