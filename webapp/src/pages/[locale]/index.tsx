import { ReactElement } from 'react'
import { getStaticPaths } from '@/lib/getStatic'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import HeroRow from '@/components/pages/home/HeroRow'
import DiscordRow from '@/components/pages/common/DiscordRow'
import siteConfig from '@/config/site'
import { getI18nProps } from '@/lib/getStatic'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  BoltIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CubeTransparentIcon,
  WalletIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: {
      en: 'Solana Token Support',
      ja: 'Solanaトークンサポート'
    },
    description: {
      en: 'Support for all major Solana tokens including BONK, JUP, JTO, RNDR, and more',
      ja: 'BONK、JUP、JTO、RNDRなど、主要なSolanaトークンをすべてサポート'
    },
    icon: CurrencyDollarIcon
  },
  {
    name: {
      en: 'Compressed NFTs',
      ja: '圧縮NFT'
    },
    description: {
      en: 'Full support for Solana compressed NFTs (cNFTs) with Bubblegum',
      ja: 'Bubblegumを使用したSolana圧縮NFT（cNFT）の完全サポート'
    },
    icon: CubeTransparentIcon
  },
  {
    name: {
      en: 'Multi-Wallet Support',
      ja: 'マルチウォレット対応'
    },
    description: {
      en: 'Connect multiple Solana wallets including Phantom, Backpack and more',
      ja: 'Phantom、Backpackなど複数のSolanaウォレットに対応'
    },
    icon: WalletIcon
  },
  {
    name: {
      en: 'DeFi Tracking',
      ja: 'DeFiトラッキング'
    },
    description: {
      en: 'Track DeFi activities across Raydium, Orca, Jupiter and more',
      ja: 'Raydium、Orca、Jupiterなどのプロトコルでのトラッキング'
    },
    icon: CircleStackIcon
  },
  {
    name: {
      en: 'Real-time Tracking',
      ja: 'リアルタイム追跡'
    },
    description: {
      en: 'Live transaction monitoring and portfolio updates',
      ja: 'リアルタイムの取引モニタリングとポートフォリオ更新'
    },
    icon: BoltIcon
  },
  {
    name: {
      en: 'Tax Forms',
      ja: '税務書類'
    },
    description: {
      en: 'Automated generation of tax forms and reports',
      ja: '税務書類とレポートの自動生成'
    },
    icon: DocumentTextIcon
  }
]

const seo = {
  pathname: '/',
  title: {
    ja: 'トップページ',
    en: 'Top page',
  },
  description: {
    ja: siteConfig.descriptionJA,
    en: siteConfig.descriptionEN,
  },
  img: null,
}

export default function Home() {
  const { t, i18n } = useTranslation(['common'])
  const locale = i18n.language as 'en' | 'ja'

  return (
    <>
      <HeroRow />
      
      <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              {t('fasterProcessing')}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t('everythingForSolanaTaxes')}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name[locale]} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    {feature.name[locale]}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description[locale]}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <DiscordRow />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['common', 'home'], seo)),
    },
  }
}

export { getStaticPaths }
