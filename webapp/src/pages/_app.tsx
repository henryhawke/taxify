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
import { ThemeProvider } from '../components/providers/ThemeProvider'
import Layout from '@/layouts/Layout'
import { useRouter } from 'next/router'
import type { Router } from 'next/router'

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
  const router = useRouter() as Router

  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
        <Head>
          <title>{pageProps?.title || 'Taxfy'}</title>
          {pageProps?.seoData?.map((seo: SeoData, index: number) => (
            <meta {...seo} key={`metaSeo${index}`} />
          ))}
        </Head>
        <Layout Component={Component} pageProps={pageProps} router={router} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default appWithTranslation(App)
