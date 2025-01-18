import { useState } from 'react'
import { Box, Button, Paper, Typography, CircularProgress } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { signInWithCustomToken } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useToastMessage } from '@/hooks/useToastMessage'
import SolanaLogoHorizontal from '@/components/common/atoms/SolanaLogoHorizontal'

export default function LoginScreen() {
  const [mounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<Error | null>(null)
  const { connected, connecting } = useWallet()
  const addToast = useToastMessage()

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      setAuthError(null)

      // Here you would typically:
      // 1. Get a message to sign from your backend
      // 2. Sign it with the wallet
      // 3. Send the signature to your backend
      // 4. Get a Firebase custom token
      // 5. Sign in with that token

      const response = await fetch('/api/auth/login', {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Failed to authenticate')
      }

      const { token } = await response.json()
      await signInWithCustomToken(auth, token)

      addToast({
        title: 'Success',
        description: 'Successfully signed in',
        type: 'success',
      })
    } catch (error) {
      console.error('Authentication error:', error)
      setAuthError(error instanceof Error ? error : new Error('Authentication failed'))
      addToast({
        title: 'Error',
        description: 'Failed to sign in',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <SolanaLogoHorizontal className="h-12" />
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Welcome to Taxfy
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph
        >
          Connect your Phantom wallet to calculate your crypto taxes
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <WalletMultiButton className="phantom-button" />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
            disabled={!connected || connecting || isLoading}
            sx={{ height: 48 }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Sign In with Phantom'
            )}
          </Button>
        </Box>

        {authError && (
          <Typography color="error" align="center">
            {authError.message}
          </Typography>
        )}
      </Paper>
    </Box>
  )
}
