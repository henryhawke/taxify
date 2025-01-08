import '@/lib/firebase'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import type { SeoData } from '@/lib/getStatic'
import '@solana/wallet-adapter-react-ui/styles.css'
import '@/assets/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import { useMemo } from 'react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App component rendering', { pageProps })

  // Set up Solana wallet connection
  const endpoint = useMemo(() => {
    console.log('Setting up endpoint')
    return clusterApiUrl('mainnet-beta')
  }, [])

  const wallets = useMemo(() => {
    console.log('Setting up wallets')
    return [new PhantomWalletAdapter()]
  }, [])

  // Use the layout defined at the page level, or fall back to a default
  const getLayout = Component.getLayout ?? ((page) => page)

  try {
    return (
      <>
        <Head>
          <title>{pageProps?.title || 'Taxfy'}</title>
          {pageProps?.seoData?.map((seo: SeoData, index: number) => (
            <meta {...seo} key={`metaSeo${index}`} />
          ))}
        </Head>
        <RecoilRoot>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                <ThemeProvider attribute="class">
                  <div className="min-h-screen scroll-smooth font-sans antialiased">
                    {getLayout(<Component {...pageProps} />)}
                  </div>
                </ThemeProvider>
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </RecoilRoot>
      </>
    )
  } catch (error) {
    console.error('Error in App render:', error)
    return <div>Something went wrong. Please try again.</div>
  }
}

export default appWithTranslation(App)
