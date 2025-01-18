import '@/assets/styles/globals.css'
import '@/styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { MuiThemeProvider } from '@/components/providers/MuiThemeProvider'
import { ToastProvider } from '@/hooks/useToastMessage'
import { AuthProvider } from '@/contexts/AuthContext'
import { useMemo } from 'react'
import '@/styles/globals.css'
import '../lib/i18n' // Import i18n configuration

export default function App({ Component, pageProps }: AppProps) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || ''

  return (
    <RecoilRoot>
      <MuiThemeProvider>
        <ToastProvider>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                <AuthProvider>
                  <Component {...pageProps} />
                </AuthProvider>
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </ToastProvider>
      </MuiThemeProvider>
    </RecoilRoot>
  )
}
