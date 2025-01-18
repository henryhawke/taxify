import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { User, signOut as firebaseSignOut, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/router'
import { useToastMessage } from '@/hooks/useToastMessage'

export type AuthStatus =
  | 'idle'
  | 'loading'
  | 'authenticated'
  | 'unauthenticated'

interface AuthContextType {
  user: User | null
  status: AuthStatus
  error: Error | null
  signOut: () => Promise<void>
  isAuthenticated: boolean
  isLoading: boolean
  clearError: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<AuthStatus>('idle')
  const [error, setError] = useState<Error | null>(null)
  const router = useRouter()
  const addToast = useToastMessage()

  // Set up persistence
  useEffect(() => {
    void setPersistence(auth, browserLocalPersistence)
  }, [])

  // Handle auth state changes
  useEffect(() => {
    setStatus('loading')
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setUser(user)
        setStatus(user ? 'authenticated' : 'unauthenticated')
        setError(null)

        // Only redirect if explicitly trying to access protected routes
        if (!user && router.pathname.startsWith('/console')) {
          // router.replace('/auth/login').catch(console.error)
        }
      },
      (error) => {
        console.error('Auth state change error:', error)
        setError(error instanceof Error ? error : new Error('Authentication error'))
        setStatus('unauthenticated')
        addToast({
          title: 'Error',
          description: error instanceof Error ? error.message : 'Authentication failed',
          type: 'error'
        })
      }
    )

    return () => unsubscribe()
  }, [router.pathname, addToast]) // Only depend on pathname changes

  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut(auth)
      await router.replace('/')
      addToast({
        title: 'Success',
        description: 'Successfully signed out',
        type: 'success'
      })
    } catch (error) {
      console.error('Sign out error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Sign out failed'
      setError(error instanceof Error ? error : new Error(errorMessage))
      addToast({
        title: 'Error',
        description: errorMessage,
        type: 'error'
      })
    }
  }, [router, addToast])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const value = {
    user,
    status,
    error,
    signOut,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    clearError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
