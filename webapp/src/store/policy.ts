import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist-policy',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
})

type PolicyAgreedState = boolean

export const policyAgreedState = atom<PolicyAgreedState>({
  key: 'taxfy_policyAgreedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
