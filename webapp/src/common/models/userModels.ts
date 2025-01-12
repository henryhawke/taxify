import { Timestamp, FieldValue } from 'firebase/firestore'

export interface User {
  id: string
  uid: string
  email: string
  username: string
  iconUrl: string
  displayName?: string
  bio?: string
  createdAt: Date | Timestamp | FieldValue
  updatedAt: Date | Timestamp | FieldValue
}

// Collection paths
export const UserCN = 'User'
export const genUserPath = () => UserCN

// User settings
export interface UserSettings {
  id?: string
  userId: string
  theme: 'light' | 'dark' | 'system'
  language: 'en' | 'ja'
  notifications: boolean
  createdAt?: Timestamp | FieldValue
  updatedAt?: Timestamp | FieldValue
}

export const UserSettingsCN = 'UserSettings'
export const genUserSettingsPath = (userId: string) =>
  `${UserCN}/${userId}/${UserSettingsCN}`
