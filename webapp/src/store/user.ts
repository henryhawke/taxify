import { atom } from 'recoil'
import { persistAtom } from './persist'
import { User } from '@/common/models'

export const defaultUser: User = {
  id: '',
  uid: '',
  email: '',
  username: '',
  displayName: '',
  bio: '',
  iconUrl: '',
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const userState = atom<User>({
  key: `taxfy_user_state_v1_${Math.random()}`,
  default: defaultUser,
  effects_UNSTABLE: [persistAtom],
})
