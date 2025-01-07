import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

export default function StatsRow() {
  const { t } = useTranslation(['common'])

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {t('stats.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('stats.description')}
            </p>
          </motion.div>
          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-2xl bg-gray-400/5 p-8 transition-colors hover:bg-gray-400/10"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                  {t(stat.name)}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const stats = [
  { id: 1, name: 'stats.transactions', value: '10K+' },
  { id: 2, name: 'stats.nfts', value: '5K+' },
  { id: 3, name: 'stats.users', value: '1K+' },
  { id: 4, name: 'stats.realtime', value: '24/7' },
]
