import { useState } from 'react'
import TransactionCollector from './TransactionCollector'
import TaxFormDownloader from './TaxFormDownloader'
import OptimizationSuggestions from './OptimizationSuggestions'
import { useTaxCalculations } from '@/hooks/useTaxCalculations'

export default function TaxDashboard() {
  const { taxableEvents } = useTaxCalculations()

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Solana Tax Dashboard</h1>
      
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