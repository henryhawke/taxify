import { useCallback, useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { PhantomAuthProvider } from '@/lib/auth/PhantomAuthProvider'
import { auth } from '@/lib/firebase'
import { User } from 'firebase/auth'

export function usePhantomAuth() {
    const wallet = useWallet()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [_isAuthenticating, setIsAuthenticating] = useState(false)
    const [authError, setAuthError] = useState<Error | null>(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signIn = useCallback(async () => {
        if (!wallet.connected || !wallet.publicKey) {
            throw new Error('Wallet not connected')
        }

        setIsAuthenticating(true)
        setAuthError(null)

        try {
            const authProvider = new PhantomAuthProvider(wallet)
            await authProvider.authenticate()
        } catch (error) {
            console.error('Authentication error:', error)
            setAuthError(error instanceof Error ? error : new Error('Authentication failed'))
            throw error
        } finally {
            setIsAuthenticating(false)
        }
    }, [wallet])

    const signOut = useCallback(async () => {
        try {
            await auth.signOut()
            // Optionally disconnect wallet
            if (wallet.connected) {
                await wallet.disconnect()
            }
        } catch (error) {
            console.error('Sign out error:', error)
            setAuthError(error instanceof Error ? error : new Error('Sign out failed'))
            throw error
        }
    }, [wallet])

    return {
        user,
        loading,
        error: authError,
        signIn,
        signOut,
        isAuthenticated: !!user,
        wallet,
        isPhantomConnected: wallet.connected
    }
} 