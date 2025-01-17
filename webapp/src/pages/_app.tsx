import '@/assets/styles/globals.css'
import '@/styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/lib/createEmotionCache'
import { theme } from '@/lib/theme'
import { AuthProvider } from '@/contexts/AuthContext'
import ToastProvider from '@/hooks/useToastMessage'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useMemo } from 'react'
import Layout from '@/layouts/Layout'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  pageProps,
  router,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || ''

  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastProvider>
            <AuthProvider>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletModalProvider>
                    <Layout Component={Component} pageProps={pageProps} router={router} />
                  </WalletModalProvider>
                </WalletProvider>
              </ConnectionProvider>
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  )
}
