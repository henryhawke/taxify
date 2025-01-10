import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getI18nProps } from '@/lib/getStatic'
import HeroRow from '@/components/pages/home/HeroRow'
import DiscordRow from '@/components/pages/common/DiscordRow'
import FeaturesRow from '@/components/pages/home/FeaturesRow'
import ServiceOverview from '@/components/pages/home/ServiceOverview'
import StatsRow from '@/components/pages/home/StatsRow'
import i18nextConfig from '../../../next-i18next.config'

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
      <div>Current path: {Array.isArray(path) ? path.join('/') : path}</div>
    </DefaultLayout>
  )
}

export default LocalePage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = i18nextConfig.i18n.locales.flatMap((locale) => [
    { params: { locale, path: [] } },
    { params: { locale, path: ['about'] } },
    { params: { locale, path: ['contact'] } },
    // Add all other possible paths here
  ])

  return {
    paths,
    // Change from 'blocking' to false for static export
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const _locale = ctx?.params?.locale as string

  return {
    props: {
      ...(await getI18nProps(ctx, ['common'], {
        pathname: '/',
        title: {
          ja: 'ホーム',
          en: 'Home',
        },
        description: {
          ja: 'ホームページ',
          en: 'Home page',
        },
        img: null,
      })),
    },
  }
}
