import { useState, useEffect } from 'react'
import AppLoading from '@/components/loading/AppLoading'
import type { AppPropsWithLayout } from '@/pages/_app'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SolanaWalletProvider from '@/components/providers/SolanaWalletProvider'

const DynamicRecoilProvider = dynamic(
  () => import('@/components/providers/RecoilProvider'),
  { ssr: false },
)

// Dynamically import components that use Recoil with SSR disabled
const ToastMessage = dynamic(() => import('@/components/utils/ToastMessage'), {
  ssr: false,
})

const AgreeToPolicy = dynamic(
  () => import('@/components/utils/AgreeToPolicy'),
  {
    ssr: false,
  },
)

export default function Layout({ Component, pageProps }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false)
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <AppLoading />
      </div>
    )
  }

  return (
    <DynamicRecoilProvider>
      <SolanaWalletProvider>
        <div className="relative min-h-screen scroll-smooth font-sans antialiased">
          <Suspense fallback={<AppLoading />}>
            {getLayout(<Component {...pageProps} />)}
          </Suspense>
          <ToastMessage />
          <AgreeToPolicy />
        </div>
      </SolanaWalletProvider>
    </DynamicRecoilProvider>
  )
}
