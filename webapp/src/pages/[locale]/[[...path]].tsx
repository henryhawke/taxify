import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getI18nProps } from '@/lib/getStatic'
import HeroRow from '@/components/pages/home/HeroRow'
import DiscordRow from '@/components/pages/common/DiscordRow'
import FeaturesRow from '@/components/pages/home/FeaturesRow'
import ServiceOverview from '@/components/pages/home/ServiceOverview'
import StatsRow from '@/components/pages/home/StatsRow'

const LocalePage = () => {
  const router = useRouter()
  const { locale, path } = router.query

  // Handle 404
  if (!['en', 'ja'].includes(locale as string)) {
    return <div>404 - Page not found</div>
  }

  // If no path, render home page
  if (!path || path.length === 0) {
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

  // Handle other paths here
  return (
    <DefaultLayout>
      <div>Current locale: {locale}</div>
      <div>Current path: {path.join('/')}</div>
    </DefaultLayout>
  )
}

export default LocalePage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const locale = ctx?.params?.locale as 'ja' | 'en'

  const seoData = {
    pathname: '/',
    title: {
      ja: 'トップページ',
      en: 'Top page',
    },
    description: {
      ja: 'Solanaの税金計算を簡単に',
      en: 'Easy tax calculations for Solana',
    },
    img: null,
  }

  return {
    props: {
      ...(await getI18nProps(ctx, ['common'], seoData)),
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: 'en', path: [] } },
      { params: { locale: 'ja', path: [] } },
    ],
    fallback: false,
  }
}
