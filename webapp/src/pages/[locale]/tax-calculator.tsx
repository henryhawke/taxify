import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { WalletTaxInfo } from '@/types/tax'
import { generateWalletTaxInfo, IRS_GUIDANCE } from '@/utils/taxCalculator'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import LoadingScreen from '@/components/common/LoadingScreen'
import useToastMessage from '@/hooks/useToastMessage'

export default function TaxCalculator() {
  const { t } = useTranslation()
  const wallet = useWallet()
  const [loading, setLoading] = useState(false)
  const [taxInfo, setTaxInfo] = useState<WalletTaxInfo | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const addToast = useToastMessage()

  useEffect(() => {
    async function fetchTaxInfo() {
      if (wallet.connected && wallet.publicKey) {
        setLoading(true)
        try {
          const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL
          if (!rpcUrl) {
            throw new Error('Solana RPC URL not configured')
          }

          const connection = new Connection(rpcUrl, 'confirmed')
          
          // Test the connection
          try {
            await connection.getLatestBlockhash()
          } catch (error) {
            throw new Error('Failed to connect to Solana network. Please try again later.')
          }

          const info = await generateWalletTaxInfo(
            wallet.publicKey.toString(),
            connection,
            selectedYear,
          )
          setTaxInfo(info)
        } catch (error) {
          console.error('Error fetching tax info:', error)
          addToast({
            title: 'Error',
            description: error instanceof Error ? error.message : 'Failed to fetch tax information',
            type: 'error',
          })
        } finally {
          setLoading(false)
        }
      }
    }

    fetchTaxInfo()
  }, [wallet.connected, wallet.publicKey, selectedYear, addToast])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Solana Tax Calculator
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Calculate your crypto taxes based on your Phantom wallet transactions
          </p>
        </div>

        {!wallet.connected ? (
          <div className="mt-12 flex justify-center">
            <WalletMultiButton />
          </div>
        ) : (
          <div className="mt-12">
            {/* Year selector */}
            <div className="mb-8 flex justify-center">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="rounded-md border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
              >
                {Array.from(
                  { length: 5 },
                  (_, i) => new Date().getFullYear() - i,
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Tax Summary */}
            {taxInfo && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Short-term Gains
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-green-600">
                    ${taxInfo.summary.shortTermGains.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Long-term Gains
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-blue-600">
                    ${taxInfo.summary.longTermGains.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Total Income
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-purple-600">
                    ${taxInfo.summary.totalIncome.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Total Fees
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-red-600">
                    ${taxInfo.summary.totalFees.toFixed(2)}
                  </p>
                </div>
              </div>
            )}

            {/* IRS Guidance */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                IRS Guidance
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {IRS_GUIDANCE.map((guidance, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow dark:bg-gray-800"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {guidance.category}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {guidance.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Reference: {guidance.irsReference}
                    </p>
                    <a
                      href={guidance.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            {taxInfo && taxInfo.transactions.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Transaction History
                </h2>
                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                      {taxInfo.transactions.map((tx, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                            {tx.type}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                            {new Date(tx.timestamp).toLocaleDateString()}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                            {tx.amount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                            ${tx.price}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                            ${tx.fee || 0}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
