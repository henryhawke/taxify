import React from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import HeroRow from '@/components/pages/home/HeroRow'
import StatsRow from '@/components/pages/home/StatsRow'
import FeaturesRow from '@/components/pages/home/FeaturesRow'
import ServiceOverview from '@/components/pages/home/ServiceOverview'
import DiscordRow from '@/components/pages/common/DiscordRow'
import { useAuthContext } from '@/contexts/AuthContext'

export default function HomePage() {
  const { status } = useAuthContext()

  // Don't render anything while checking auth status
  if (status === 'loading') {
    return null
  }

  return (
    <DefaultLayout>
      <HeroRow />
      <StatsRow />
      <FeaturesRow />
      <ServiceOverview />
      <DiscordRow />
    </DefaultLayout>
  )
}
