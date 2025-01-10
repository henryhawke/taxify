import { createContext, useContext, ReactNode } from 'react'
import { useAuth, AuthStatus } from '@/hooks/useAuth'
import { User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  status: AuthStatus
  error: Error | null
  signOut: () => Promise<void>
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
