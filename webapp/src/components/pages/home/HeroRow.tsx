import { useTranslation } from 'next-i18next'

export default function HeroRow() {
  const { t } = useTranslation(['common'])

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            {t('welcome')}
          </h1>
        </div>
      </div>
    </div>
  )
}
