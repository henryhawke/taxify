import TransactionCollector from './TransactionCollector'

export default function TaxDashboard() {
  return (
    <div>
      <TransactionCollector />
      <WalletConnector />
      <TransactionSummary />
      <TaxableEventsList />
      <TaxFormDownloader />
      <OptimizationSuggestions />
    </div>
  )
} 