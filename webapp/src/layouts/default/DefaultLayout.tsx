import { ReactNode } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  console.log('DefaultLayout rendering')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Taxfy
            </h1>
            {console.log('About to render WalletMultiButton')}
            <WalletMultiButton />
          </div>
        </div>
      </header>
      <main>
        {console.log('About to render children')}
        {children}
      </main>
    </div>
  )
}
