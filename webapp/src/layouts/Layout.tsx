import { ReactElement } from 'react'
import type { NextPage } from 'next'
import type { Router } from 'next/router'
import { useAuthContext } from '@/contexts/AuthContext'
import Sidebar from '@/components/layout/Sidebar'

interface Props {
  Component: NextPage
  pageProps: any
  router: Router
}

export default function Layout({
  Component,
  pageProps,
  router,
}: Props): ReactElement {
  const { isAuthenticated } = useAuthContext()
  const isAuthPage = router.pathname.startsWith('/auth/')

  // Don't show sidebar on auth pages
  if (isAuthPage) {
    return <Component {...pageProps} />
  }

  return (
    <div className="flex min-h-screen">
      {isAuthenticated && <Sidebar />}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
