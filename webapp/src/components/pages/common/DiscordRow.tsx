import { useTranslation } from 'next-i18next'
import siteConfig from '@/config/site'

export default function DiscordRow() {
  const { t } = useTranslation(['common'])

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <a
            href={siteConfig.discordInvitationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            {t('connect')}
          </a>
        </div>
      </div>
    </div>
  )
}
