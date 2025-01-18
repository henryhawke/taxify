import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface LoadingScreenProps {
  show?: boolean
}

export default function LoadingScreen({ show = true }: LoadingScreenProps) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
          <p className="text-lg font-medium text-gray-900 dark:text-white">Loading...</p>
        </div>
      </div>
    </Transition.Root>
  )
}
