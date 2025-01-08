import { useTranslation } from 'next-i18next'
import SecurityBadge from '@/components/common/SecurityBadge'
import Logo3D from '@/components/common/Logo3D'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export default function HeroRow() {
  const { t } = useTranslation(['common'])
  const { setVisible } = useWalletModal()

  return (
    <div className="relative isolate">
      {/* Gradient Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <SecurityBadge />
          <h1 className="mt-6 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            {t('welcome')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={() => setVisible(true)}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative mx-auto w-[22.875rem] max-w-full">
            <img
              className="absolute -top-64 left-1/2 -z-10 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              src="/images/hero-gradient.png"
              alt=""
              width={2432}
              height={1442}
            />
            <div className="relative rounded-xl bg-gray-900/5 p-8 shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-800/50 dark:ring-white/10">
              <Logo3D />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
