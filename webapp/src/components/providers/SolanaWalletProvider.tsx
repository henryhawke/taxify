import { useMemo } from 'react'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletError } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import useToastMessage from '@/hooks/useToastMessage'
import dynamic from 'next/dynamic'

require('@solana/wallet-adapter-react-ui/styles.css')

type Props = {
  children: React.ReactNode
}

function BaseWalletProvider({ children }: Props) {
  const addToast = useToastMessage()

  const endpoint = useMemo(
    () =>
      process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl('mainnet-beta'),
    [],
  )

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter({
        network: process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'mainnet-beta',
      }),
    ],
    [],
  )

  const onError = (error: WalletError) => {
    addToast({
      title: 'Wallet Error',
      description: error.message,
      type: 'error',
    })
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true} onError={onError}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default dynamic(() => Promise.resolve(BaseWalletProvider), {
  ssr: false,
})
