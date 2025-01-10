import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist-user',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
})

export type User = {
  uid: string
  email: string
  username: string
  iconUrl: string
}

export const defaultUser: User = {
  uid: '',
  email: '',
  username: '',
  iconUrl: '',
}

export const userState = atom<User>({
  key: 'taxfy_userState',
  default: defaultUser,
  effects_UNSTABLE: [persistAtom],
})
