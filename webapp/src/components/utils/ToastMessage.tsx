import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { toastsState, type ToastMessage } from '@/store/toast'
import { Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

export default function ToastMessage() {
  const [toasts, setToasts] = useRecoilState(toastsState)

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length > 0) {
        setToasts((currentToasts) => currentToasts.slice(1))
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [toasts, setToasts])

  if (toasts.length === 0) return null

  return (
    <div className="fixed right-0 top-0 z-50 m-8 w-full max-w-sm">
      {toasts.map((toast, index) => (
        <Transition
          key={index}
          show={true}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto mb-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {toast.type === 'success' && (
                    <CheckCircleIcon className="h-6 w-6 text-green-400" />
                  )}
                  {toast.type === 'error' && (
                    <XCircleIcon className="h-6 w-6 text-red-400" />
                  )}
                  {toast.type === 'warning' && (
                    <ExclamationCircleIcon className="h-6 w-6 text-yellow-400" />
                  )}
                  {toast.type === 'info' && (
                    <InformationCircleIcon className="h-6 w-6 text-blue-400" />
                  )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    {toast.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {toast.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      ))}
    </div>
  )
}
