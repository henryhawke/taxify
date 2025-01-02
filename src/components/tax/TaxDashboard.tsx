export default function TaxDashboard() {
  return (
    <div>
      <WalletConnector />
      <TransactionSummary />
      <TaxableEventsList />
      <TaxFormDownloader />
      <OptimizationSuggestions />
    </div>
  )
} 