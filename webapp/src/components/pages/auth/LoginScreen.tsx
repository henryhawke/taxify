import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import SolanaLogoHorizontal from '@/components/common/atoms/SolanaLogoHorizontal'
import useToastMessage from '@/hooks/useToastMessage'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import {
  Box,
  Paper,
  Typography,
  Button,
  Container,
  CircularProgress,
} from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'

const WalletMultiButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false },
)

export default function LoginScreen() {
  const { t } = useTranslation()
  const { signIn, loading: authLoading, error: authError } = usePhantomAuth()
  const { isAuthenticated } = useAuthContext()
  const addToast = useToastMessage()
  const router = useRouter()
  const { connected, connecting } = useWallet()
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/tax-calculator')
    }
  }, [isAuthenticated, router])

  const handleSignIn = async () => {
    if (!connected) {
      addToast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet first',
        type: 'error',
      })
      return
    }

    setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  const isButtonDisabled = !connected || connecting || isLoading || authLoading

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, sm: 12, md: 16 } }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ mt: 4, mb: 2 }}>
          <SolanaLogoHorizontal className="w-48" />
          <Typography
            variant="h5"
            align="center"
            sx={{
              mt: 2,
              color: 'text.secondary',
              fontWeight: 'medium',
            }}
          >
            {t('auth:signInWithSolana')}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            mt: 4,
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 280,
              '& .wallet-adapter-button': {
                width: '100%',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              },
            }}
          >
            <WalletMultiButton />
          </Box>

          <Box sx={{ width: '100%', maxWidth: 280, textAlign: 'center' }}>
            <Button
              onClick={handleSignIn}
              disabled={isButtonDisabled}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              {isLoading || authLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t('auth:signIn')
              )}
            </Button>

            {!connected && (
              <Typography
                variant="body2"
                sx={{ mt: 2, color: 'text.secondary' }}
              >
                {t('auth:pleaseConnectWallet')}
              </Typography>
            )}

            {authError && (
              <Typography variant="body2" sx={{ mt: 2, color: 'error.main' }}>
                {authError.message}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
