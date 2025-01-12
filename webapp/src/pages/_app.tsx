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
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import SolanaWalletProvider from '@/components/providers/SolanaWalletProvider'
import Layout from '@/layouts/Layout'
import { AuthProvider } from '@/contexts/AuthContext'
import ToastContainer from '@/components/common/ToastContainer'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SolanaWalletProvider>
            <Head>
              <title>{pageProps?.title || 'Taxfy'}</title>
              {pageProps?.seoData?.map((seo: SeoData, index: number) => (
                <meta {...seo} key={`metaSeo${index}`} />
              ))}
            </Head>
            <Layout
              Component={Component}
              pageProps={pageProps}
              router={router}
            />
            <ToastContainer />
          </SolanaWalletProvider>
        </ThemeProvider>
      </AuthProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
