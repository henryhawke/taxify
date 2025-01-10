import { ReactNode } from 'react'
import Header from '@/layouts/auth/AuthHeader'
import Footer from '@/layouts/common/CommonFooter'

type DefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
