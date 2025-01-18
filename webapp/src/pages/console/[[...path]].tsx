import { useRouter } from 'next/router'
import ConsoleLayout from '@/layouts/console/ConsoleLayout'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'

// Dynamically import all console pages
const ChatPage = dynamic(() => import('@/components/pages/console/chat'))
const PortfolioPage = dynamic(() => import('@/components/pages/console/portfolio'))
const SettingsPage = dynamic(() => import('@/components/pages/console/settings'))
const ProfilePage = dynamic(() => import('@/components/pages/console/profile'))
const CalculatorPage = dynamic(() => import('@/components/pages/console/calculator'))

export default function ConsolePage() {
  const router = useRouter()
  const { user, isLoading, status } = useAuthContext()
  const path = router.query.path as string[] | undefined

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && status === 'unauthenticated') {
      router.replace('/auth/login')
    }
  }, [status, isLoading, router])

  if (isLoading || !user) {
    return null
  }

  // Determine which component to render based on the path
  const renderContent = () => {
    if (!path || path.length === 0) {
      // Default route - redirect to calculator
      router.replace('/console/calculator')
      return null
    }

    const section = path[0]
    switch (section) {
      case 'calculator':
        return <CalculatorPage />
      case 'chat':
        return <ChatPage />
      case 'portfolio':
        return <PortfolioPage />
      case 'settings':
        return <SettingsPage />
      case 'profile':
        return <ProfilePage />
      default:
        router.replace('/console/calculator')
        return null
    }
  }

  return <ConsoleLayout>{renderContent()}</ConsoleLayout>
} 