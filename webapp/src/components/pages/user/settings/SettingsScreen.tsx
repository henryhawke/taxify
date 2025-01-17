import ColorModeChanger from '@/components/utils/ColorModeChanger'
import { useState } from 'react'
import Button from '@/components/common/atoms/Button'

import EditUserIconUrl from '@/components/pages/user/settings/EditUserIconUrl'
import EditUserProfile from '@/components/pages/user/settings/EditUserProfile'

export default function SettingsScreen() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)

  return (
    <>
      <div className="h-24 w-full bg-white dark:bg-gray-900">
        <div className="flex flex-row items-center justify-between p-6 md:justify-start md:gap-10">
          <div className="flex flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-foreground text-2xl font-bold">Settings</h1>
              <Button
                variant="solid"
                onClick={() => setIsEditProfileOpen(true)}
                className="ml-4"
              >
                Edit Profile
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-6">
            <ColorModeChanger />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-white sm:items-start dark:bg-gray-900">
        <div className="flex w-full flex-col items-center px-4 sm:flex-row sm:gap-8">
          <div className="flex w-full flex-col items-center sm:w-96">
            <EditUserIconUrl />
          </div>
          <div className="flex w-full flex-col">
            <EditUserProfile
              open={isEditProfileOpen}
              onClose={() => setIsEditProfileOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
