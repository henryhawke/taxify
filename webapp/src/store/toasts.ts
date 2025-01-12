import { atom } from 'recoil'

export type Toast = {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  duration?: number
}

export type Toasts = Toast[]

const toastsState = atom<Toasts>({
  key: `taxfy_toasts_state_v1_${Math.random()}`,
  default: [],
})

export { toastsState }
