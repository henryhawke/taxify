import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import HeroRow from '@/components/pages/home/HeroRow'
import StatsRow from '@/components/pages/home/StatsRow'
import FeaturesRow from '@/components/pages/home/FeaturesRow'
import ServiceOverview from '@/components/pages/home/ServiceOverview'
import DiscordRow from '@/components/pages/common/DiscordRow'
import { useAuth } from '@/hooks/useAuth'

export default function HomePage() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      router.push('/tax-calculator')
    }
  }, [user, router])

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
