import { ReactNode, useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ClientOnly from '@/components/common/ClientOnly'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { t } = useTranslation(['common'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Taxfy
              </span>
            </Link>
          </div>
          <div className="flex flex-1 justify-end">
            <ClientOnly>
              <WalletMultiButton />
            </ClientOnly>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
