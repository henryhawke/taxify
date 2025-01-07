import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getI18nProps } from '@/lib/getStatic'
import HeroRow from '@/components/pages/home/HeroRow'
import DiscordRow from '@/components/pages/common/DiscordRow'

export default function LocalePage() {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
    },
  }
}

export const getStaticPaths = async () => {
  // Define all possible static paths
  const paths = [
    // Home pages
    { params: { locale: 'en', path: [] } },
    { params: { locale: 'ja', path: [] } },
    // Add other static paths as needed
    // { params: { locale: 'en', path: ['about'] } },
    // { params: { locale: 'ja', path: ['about'] } },
  ]

  return {
    paths,
    fallback: false, // Return 404 for undefined paths
  }
}
