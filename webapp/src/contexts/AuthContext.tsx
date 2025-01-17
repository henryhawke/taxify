import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { User, signOut as firebaseSignOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/router'

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

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
        setError(
          error instanceof Error ? error : new Error('Authentication error'),
        )
        setStatus('unauthenticated')
      },
    )
    return () => unsubscribe()
  }, [])

  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Sign out error:', error)
      setError(error instanceof Error ? error : new Error('Sign out failed'))
    }
  }, [router])

  const value = {
    user,
    status,
    error,
    signOut,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
