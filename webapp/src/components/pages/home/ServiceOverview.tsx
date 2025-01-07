import { useTranslation } from 'next-i18next'

export default function ServiceOverview() {
  const { t } = useTranslation(['common'])

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            {t('services.tagline')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t('services.title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('services.description')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none dark:ring-gray-700">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t('services.features.title')}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
              {t('services.features.description')}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
                {t('services.includes')}
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 dark:text-gray-300">
              <li className="flex gap-x-3">
                <span
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {t('services.features.list.transactions')}
              </li>
              <li className="flex gap-x-3">
                <span
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {t('services.features.list.nft')}
              </li>
              <li className="flex gap-x-3">
                <span
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {t('services.features.list.realtime')}
              </li>
              <li className="flex gap-x-3">
                <span
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {t('services.features.list.historical')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
