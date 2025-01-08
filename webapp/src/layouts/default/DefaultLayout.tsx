import { ReactNode } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

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
