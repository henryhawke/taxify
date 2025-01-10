import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import SolanaLogoHorizontal from '@/components/common/atoms/SolanaLogoHorizontal'
import useToastMessage from '@/hooks/useToastMessage'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'

export default function LoginScreen() {
  const { t } = useTranslation()
  const { signIn, wallet, loading, error } = usePhantomAuth()
  const { isAuthenticated } = useAuthContext()
  const addToast = useToastMessage()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/tax-calculator')
    }
  }, [isAuthenticated, router])

  const handleSignIn = async () => {
    try {
      await signIn()
      addToast({
        title: t('auth:verifyTitle'),
        description: t('auth:verifyDescription'),
        type: 'info',
      })
    } catch (err) {
      console.error(err)
      if (err instanceof Error) {
        addToast({
          title: err.name,
          description: err.message,
          type: 'error',
        })
      }
    }
  }

  return (
    <>
      <div className="px-6 py-24 lg:px-8 lg:py-48">
        <div className="pa-4 flex h-full flex-col items-center justify-center border-2 border-gray-900 shadow-lg sm:mx-auto sm:w-full sm:max-w-md md:max-w-lg dark:border-white">
          <div className="mt-20">
            <SolanaLogoHorizontal className="mx-auto w-48" />
            <h2 className="mt-4 text-center text-xl font-bold tracking-tight text-gray-500 dark:text-gray-300">
              {t('auth:signInWithSolana')}
            </h2>
          </div>
          <div className="mb-20 mt-12 w-full sm:mx-auto sm:max-w-md">
            <div className="mb-2 flex flex-col items-center justify-center gap-y-10">
              <div
                className={clsx(
                  'flex flex-row items-center justify-center rounded-none bg-gray-900 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700',
                )}
              >
                <WalletMultiButton />
              </div>
              <div
                className={clsx(
                  'flex flex-col items-center justify-center gap-2',
                )}
              >
                <button
                  onClick={handleSignIn}
                  disabled={!wallet.connected || loading}
                  className={clsx(
                    'px-6 py-2',
                    !wallet.connected || loading
                      ? 'bg-gray-300 text-white hover:cursor-not-allowed dark:bg-gray-800 dark:text-gray-400'
                      : 'bg-green-700 text-white hover:cursor-pointer hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-800',
                  )}
                >
                  {loading ? t('common:loading') : t('auth:signIn')}
                </button>
                {!wallet.connected && (
                  <p className="font-light text-gray-500">
                    {t('auth:pleaseConnectWallet')}
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-500">{error.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
