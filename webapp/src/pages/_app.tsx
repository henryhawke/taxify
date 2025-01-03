import '@/lib/firebase'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from '@/layouts/Layout'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import type { SeoData } from '@/lib/getStatic'
import '@solana/wallet-adapter-react-ui/styles.css'
import '@/assets/styles/globals.css'
import { ThemeProvider } from 'next-themes'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        {pageProps.seoData?.map((seo: SeoData, index: number) => (
          <meta {...seo} key={`metaSeo${index}`} />
        ))}
      </Head>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <main className="min-h-screen scroll-smooth font-sans antialiased">
            <Layout
              Component={Component}
              pageProps={pageProps}
              router={router}
            />
          </main>
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}

export default appWithTranslation(App)
