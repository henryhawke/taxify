export interface UserModel {
  id: string
  email: string
  name: string
  photoUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserProfileModel {
  id: string
  userId: string
  displayName?: string
  avatarUrl?: string
  bio?: string
  createdAt: Date
  updatedAt: Date
}
