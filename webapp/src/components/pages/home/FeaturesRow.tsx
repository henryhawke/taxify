import { useTranslation } from 'next-i18next'
import {
  ChartBarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'features.transactions.title',
    description: 'features.transactions.description',
    icon: ChartBarIcon,
  },
  {
    name: 'features.nft.title',
    description: 'features.nft.description',
    icon: DocumentTextIcon,
  },
  {
    name: 'features.realtime.title',
    description: 'features.realtime.description',
    icon: ClockIcon,
  },
  {
    name: 'features.historical.title',
    description: 'features.historical.description',
    icon: CurrencyDollarIcon,
  },
]

export default function FeaturesRow() {
  const { t } = useTranslation(['common'])

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            {t('features.tagline')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t('features.title')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  {t(feature.name)}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{t(feature.description)}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
