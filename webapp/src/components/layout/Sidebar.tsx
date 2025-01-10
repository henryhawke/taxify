import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import {
  HomeIcon,
  CalculatorIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Tax Calculator', href: '/tax-calculator', icon: CalculatorIcon },
  { name: 'Portfolio', href: '/portfolio', icon: ChartBarIcon },
  { name: 'Documents', href: '/documents', icon: DocumentTextIcon },
  { name: 'Settings', href: '/settings', icon: Cog8ToothIcon },
]

export default function Sidebar() {
  const router = useRouter()
  const { user } = useAuthContext()
  const { signOut } = usePhantomAuth()

  const handleSignOut = async () => {
    await signOut()
    router.push('/auth/login')
  }

  return (
    <div className="flex h-full min-h-screen w-64 flex-col bg-gray-900">
      {/* User Profile Section */}
      <div className="flex flex-col items-center space-y-3 border-b border-gray-700 p-6">
        <div className="h-16 w-16 rounded-full bg-gray-800">
          <UserCircleIcon className="h-16 w-16 text-gray-400" />
        </div>
        <div className="text-center">
          <h2 className="text-sm font-medium text-white">
            {user?.email || 'Anonymous User'}
          </h2>
          <p className="text-xs text-gray-400">
            {user?.uid?.slice(0, 8) || 'Not Connected'}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = router.pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
              )}
            >
              <item.icon
                className={clsx(
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-white',
                  'mr-3 h-6 w-6 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Sign Out Button */}
      <div className="border-t border-gray-700 p-4">
        <button
          onClick={handleSignOut}
          className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <ArrowRightOnRectangleIcon
            className="mr-3 h-6 w-6 text-gray-400 group-hover:text-white"
            aria-hidden="true"
          />
          Sign Out
        </button>
      </div>
    </div>
  )
}
