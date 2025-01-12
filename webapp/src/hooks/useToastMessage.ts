import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { Toast, getToastsState } from '@/store/toasts'
import { v4 as uuidv4 } from 'uuid'

export default function useToastMessage() {
  const setToasts = useSetRecoilState(getToastsState())

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = uuidv4()
      setToasts((prev) => [...prev, { ...toast, id }])

      // Auto remove toast after duration (default 5 seconds)
      const duration = toast.duration || 5000
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    },
    [setToasts]
  )

  return addToast
}
