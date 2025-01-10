import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import LoadingScreen from '@/components/common/LoadingScreen'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading, error } = usePhantomAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    } else if (user && router.pathname === '/') {
      router.push('/tax-calculator')
    }
  }, [loading, user, router])

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Authentication Error
          </h1>
          <p className="mt-2 text-gray-600">{error.message}</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
