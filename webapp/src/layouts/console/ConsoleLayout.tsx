import type { ReactNode } from 'react'
import { useMemo, useCallback, useEffect, useState, Fragment } from 'react'
import { Transition, Dialog, Menu } from '@headlessui/react'
import { XMarkIcon, Bars3BottomLeftIcon, UserIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { userHeaderNav, userMenuNav } from '@/config/navs'
import Link from 'next/link'
import LogoHorizontal from '@/components/common/atoms/LogoHorizontal'
import Image from 'next/image'
import { User } from '@/common/models/userModels'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'

interface ConsoleLayoutProps {
  children: ReactNode
}

export default function ConsoleLayout({ children }: ConsoleLayoutProps) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, signOut: authSignOut } = useAuth()

  const currentPath = useMemo(() => {
    return router.asPath
  }, [router.asPath])

  const handleSignOut = async () => {
    try {
      await authSignOut()
      await router.push('/auth/login')
    } catch (e) {
      console.error('Error signing out:', e)
    }
  }

  return (
    <div className="relative h-full min-h-screen w-full bg-white dark:bg-gray-900">
      {/* Sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center justify-center px-4 pb-6">
                  <LogoHorizontal className="h-12 w-auto sm:h-14" />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                  <nav className="flex-1 space-y-2">
                    {userMenuNav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          currentPath === item.href
                            ? 'bg-gray-700 text-white'
                            : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                          'group flex items-center rounded-md px-3 py-2.5 text-base font-medium',
                        )}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.icon && (
                          <item.icon
                            className={clsx(
                              currentPath === item.href
                                ? 'text-white'
                                : 'text-gray-200 group-hover:text-white',
                              'mr-4 h-6 w-6 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                        )}
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-shrink-0 items-center justify-center px-4 pb-6 pt-5">
            <LogoHorizontal className="h-12 w-auto sm:h-14" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <nav className="flex-1 space-y-2 px-3 pb-4">
              {userMenuNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    currentPath === item.href
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                    'group flex items-center rounded-md px-3 py-2.5 text-sm font-medium',
                  )}
                >
                  {item.icon && (
                    <item.icon
                      className={clsx(
                        currentPath === item.href
                          ? 'text-white'
                          : 'text-gray-200 group-hover:text-white',
                        'mr-3 h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="border-t border-gray-700 px-3 pb-3 pt-2">
              <Link
                href="/console/profile"
                className="group flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    className="mr-3 h-6 w-6 rounded-full"
                    unoptimized
                    alt="User icon"
                    width={24}
                    height={24}
                  />
                ) : (
                  <UserIcon className="mr-3 h-5 w-5 text-gray-200" />
                )}
                My Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="mt-1 w-full group flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                <XMarkIcon className="mr-3 h-5 w-5 text-gray-200" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
          <button
            type="button"
            className="px-4 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden dark:text-gray-50 dark:hover:text-gray-200"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 