import { useEffect, useState, useCallback } from 'react'
import { auth } from '@/lib/firebase'
import { User, signOut as firebaseSignOut } from 'firebase/auth'

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated'

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [status, setStatus] = useState<AuthStatus>('idle')
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setStatus('loading')
        const unsubscribe = auth.onAuthStateChanged(
            (user) => {
                setUser(user)
                setStatus(user ? 'authenticated' : 'unauthenticated')
                setError(null)
            },
            (error) => {
                console.error('Auth state change error:', error)
                setError(error instanceof Error ? error : new Error('Authentication error'))
                setStatus('unauthenticated')
            }
        )

        return () => unsubscribe()
    }, [])

    const signOut = useCallback(async () => {
        try {
            await firebaseSignOut(auth)
        } catch (error) {
            console.error('Sign out error:', error)
            setError(error instanceof Error ? error : new Error('Sign out failed'))
            throw error
        }
    }, [])

    return {
        user,
        status,
        error,
        signOut,
        isAuthenticated: status === 'authenticated',
        isLoading: status === 'loading',
    }
} 