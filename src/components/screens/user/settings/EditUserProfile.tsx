import { useState } from 'react'

import { UserModel, UserCN } from '@/common/models/userModels'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface EditUserProfileProps {
  user: UserModel
}

export default function EditUserProfile({ user }: EditUserProfileProps) {

  const [isUpdating, setIsUpdating] = useState(false)
  const [username, setUsername] = useState(user.username)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      await updateDoc(doc(db, UserCN, user.id), {
        username,
        updatedAt: new Date(),
      })
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {('username')}
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={isUpdating}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >

      </button>
    </form>
  )
}
