import { useState } from 'react'
import { Box, Button, Paper, Typography, CircularProgress } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { signInWithCustomToken } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useToastMessage } from '@/hooks/useToastMessage'
import Image from 'next/image'
import TaxfyLogo from '/logo.png'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<Error | null>(null)
  const { connected, connecting } = useWallet()
  const addToast = useToastMessage()

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      setAuthError(null)

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
          bgcolor: 'background.paper',
          borderRadius: 3,
        }}
      >
        <Image src={TaxfyLogo} alt="Taxfy Logo" width={120} height={40} priority />
        
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Welcome to Taxfy
        </Typography>
        
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 300 }}>
          Connect your Phantom wallet to calculate your crypto taxes
        </Typography>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <WalletMultiButton 
            style={{
              width: '100%',
              height: '48px',
              justifyContent: 'center',
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              transition: 'all 0.2s ease',
              color: '#f1f5f9',
            }}
          />
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignIn}
            disabled={!connected || connecting || isLoading}
            sx={{ 
              height: 48,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
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