import { atom } from 'recoil'

export type ToastMessage = {
    id?: string
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    description: string
}

export const toastsState = atom<ToastMessage[]>({
    key: 'taxfy_toastsState',
    default: [],
    dangerouslyAllowMutability: true
}) 