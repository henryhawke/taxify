import { atom } from 'recoil'

export type Toast = {
  id?: string
  title: string
  description: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export type Toasts = Toast[]

const toastsState = atom<Toasts>({
  key: 'taxfy_toasts_state_v1',
  default: [],
})

// Export a getter to ensure we only create the atom once
export const getToastsState = () => toastsState
