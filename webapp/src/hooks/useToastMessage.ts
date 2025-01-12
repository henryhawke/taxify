import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { Toast, toastsState } from '@/store/toasts'

export default function useToastMessage() {
  const setToasts = useSetRecoilState(toastsState)

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = uuidv4()
      setToasts((prev) => [
        ...prev,
        {
          ...toast,
          id,
          duration: toast.duration ?? 5000,
        },
      ])
    },
    [setToasts],
  )

  return addToast
}
