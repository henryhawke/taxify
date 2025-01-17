import React from 'react'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import HeroRow from '@/components/pages/home/HeroRow'
import StatsRow from '@/components/pages/home/StatsRow'
import FeaturesRow from '@/components/pages/home/FeaturesRow'
import ServiceOverview from '@/components/pages/home/ServiceOverview'
import DiscordRow from '@/components/pages/common/DiscordRow'

export default function HomePage() {
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
