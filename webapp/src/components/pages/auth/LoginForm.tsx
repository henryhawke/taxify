import { useState, useEffect } from 'react'
import { Box, Button, Paper, Typography, CircularProgress } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { signInWithCustomToken } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useToastMessage } from '@/hooks/useToastMessage'
import Image from 'next/image'
import TaxfyLogo from '/logo.png'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import bs58 from 'bs58'

// Dynamically import WalletMultiButton with no SSR
const WalletMultiButtonDynamic = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
)

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<Error | null>(null)
  const [mounted, setMounted] = useState(false)
  const { connected, connecting, publicKey, signMessage } = useWallet()
  const addToast = useToastMessage()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignIn = async () => {
    if (!publicKey || !signMessage) {
      addToast({
        title: 'Error',
        description: 'Please connect your wallet first',
        type: 'error',
      })
      return
    }

    try {
      setIsLoading(true)
      setAuthError(null)

      // 1. Get nonce from backend
      const nonceResponse = await fetch('/api/auth/nonce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
        }),
      })

      if (!nonceResponse.ok) {
        throw new Error('Failed to get authentication nonce')
      }

      const { nonce } = await nonceResponse.json()

      // 2. Sign the nonce with Phantom
      const message = new TextEncoder().encode(
        `Sign this message for authenticating with Taxfy\nNonce: ${nonce}`
      )
      const signature = await signMessage(message)

      // 3. Verify signature and get Firebase token
      const authResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
          signature: bs58.encode(signature),
          nonce,
        }),
      })

      if (!authResponse.ok) {
        const error = await authResponse.json()
        throw new Error(error.message || 'Failed to authenticate')
      }

      const { token } = await authResponse.json()

      // 4. Sign in with Firebase
      await signInWithCustomToken(auth, token)

      addToast({
        title: 'Success',
        description: 'Successfully signed in',
        type: 'success',
      })

      // Update redirect path to tax-calculator
      router.push('/tax-calculator')
    } catch (error) {
      console.error('Authentication error:', error)
      setAuthError(error instanceof Error ? error : new Error('Authentication failed'))
      addToast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to sign in',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null
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
        <Image src="/logo.png" alt="Taxfy Logo" width={120} height={40} priority />
        
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Welcome to Taxfy
        </Typography>
        
        <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 300 }}>
          Connect your Phantom wallet to calculate your crypto taxes
        </Typography>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <WalletMultiButtonDynamic 
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