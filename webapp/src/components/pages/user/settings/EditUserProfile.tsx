import { XMarkIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'next-i18next'
import { useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '@/store/user'
import { usernameSchema } from '@/utils/form'
import { db } from '@/lib/firebase'
import { useToastMessage } from '@/hooks/useToastMessage'
import { z } from 'zod'
import { useForm, Controller, Resolver } from 'react-hook-form'

import { User, genUserPath } from '@/common/models'
import { update } from '@/lib/taxfy/firestore'
import {
  Dialog,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material'
// import { FolderMinusIcon } from '@heroicons/react/24/outline'
// import { UserCircleIcon } from '@heroicons/react/24/solid'

type FormInputs = {
  username: string
  displayName?: string
  bio?: string
  iconUrl: string
}

const formSchema = z.object({
  username: usernameSchema,
  displayName: z
    .string()
    .min(2, 'Display name must be at least 2 characters')
    .max(50)
    .optional(),
  bio: z.string().max(160).optional(),
  iconUrl: z.string().url(),
})

type Props = {
  open: boolean
  onClose: () => void
}

export default function EditUserProfile({ open, onClose }: Props) {
  const { t } = useTranslation()
  const [isLoading, setLoading] = useState(false)
  const [user, setUser] = useRecoilState(userState)
  const addToast = useToastMessage()
  const theme = useTheme()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>({
    resolver: formSchema as unknown as Resolver<FormInputs>,
    defaultValues: {
      username: user?.username || '',
      displayName: user?.displayName || '',
      bio: user?.bio || '',
      iconUrl: user?.iconUrl || '',
    },
  })

  const onSubmit = useCallback(
    async (data: FormInputs) => {
      if (!user || !db) return

      try {
        setLoading(true)
        const updateData: Partial<User> = {
          username: data.username,
          displayName: data.displayName,
          bio: data.bio,
          iconUrl: data.iconUrl,
        }
        await update<User>(db, genUserPath(), user.uid, updateData)
        setUser((prev) => ({
          ...prev,
          ...updateData,
        }))
        addToast({
          type: 'success',
          title: t('settings:updateProfileSuccess'),
          description: t('settings:updateProfileSuccessMessage'),
        })
        onClose()
      } catch (err) {
        console.error(err)
        if (
          err instanceof Error &&
          (err.message.includes('Firebase ID token has expired.') ||
            err.message.includes('Error: getUserAuth'))
        ) {
          addToast({
            type: 'error',
            title: t('errorTokenExpiredTitle'),
            description: t('errorTokenExpiredBody'),
          })
        } else {
          addToast({
            type: 'error',
            title: t('settings:updateProfileError'),
            description: t('settings:updateProfileErrorMessage'),
          })
        }
      } finally {
        setLoading(false)
      }
    },
    [t, user, setUser, addToast, onClose],
  )

  return (
    <Dialog
      open={open}
      onClose={() => !isLoading && onClose()}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {t('settings:editProfile')}
          </Typography>
          <IconButton onClick={() => !isLoading && onClose()} size="small">
            <XMarkIcon className="h-5 w-5" />
          </IconButton>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('settings:username')}
                  error={!!errors.username}
                  helperText={
                    errors.username?.message || t('settings:usernameErrorText')
                  }
                  fullWidth
                  required
                />
              )}
            />

            <Controller
              name="displayName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('settings:displayName')}
                  error={!!errors.displayName}
                  helperText={
                    errors.displayName?.message ||
                    t('settings:displayNameErrorText')
                  }
                  fullWidth
                  required
                />
              )}
            />

            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('settings:bio')}
                  multiline
                  rows={3}
                  error={!!errors.bio}
                  helperText={errors.bio?.message || t('settings:bioErrorText')}
                  fullWidth
                />
              )}
            />

            <Controller
              name="iconUrl"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('settings:iconUrl')}
                  error={!!errors.iconUrl}
                  helperText={
                    errors.iconUrl?.message || t('settings:iconUrlErrorText')
                  }
                  fullWidth
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: '20px',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
              }}
            >
              {isLoading ? t('common:saving') : t('common:save')}
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  )
}
