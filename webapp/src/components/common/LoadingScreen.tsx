import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [dots, setDots] = useState('')
  const [message, setMessage] = useState(0)

  const funMessages = [
    'Calculating your capital gains',
    'Analyzing transaction history',
    'Checking for taxable events',
    'Verifying staking rewards',
    'Computing cost basis',
    'Identifying NFT transactions',
    'Categorizing DeFi activities',
    'Scanning for airdrops',
    'Validating wallet transfers',
    'Preparing your tax summary',
  ]

  useEffect(() => {
    // Animate the dots
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'))
    }, 500)

    // Change the message every 3 seconds
    const messageInterval = setInterval(() => {
      setMessage((prev) => (prev + 1) % funMessages.length)
    }, 3000)

    return () => {
      clearInterval(dotInterval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated circle */}
      <div className="relative h-24 w-24">
        <div className="absolute h-full w-full animate-ping rounded-full border-4 border-green-500 opacity-20"></div>
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-green-500"></div>
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 opacity-10"></div>
      </div>

      {/* Fun loading message */}
      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {funMessages[message]}
          <span className="inline-block w-6 text-left">{dots}</span>
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Crunching those numbers
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="animate-blob absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 animate-blob absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-yellow-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 animate-blob absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
      </div>
    </div>
  )
}
