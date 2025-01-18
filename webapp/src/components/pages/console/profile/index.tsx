import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import LoadingScreen from '@/components/common/LoadingScreen'
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  TextField,
  Alert,
  Chip,
} from '@mui/material'
import {
  EnvelopeIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  DocumentTextIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'
import { useToastMessage } from '@/hooks/useToastMessage'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { User, UserSettings } from '@/common/models'
import { Timestamp } from 'firebase/firestore'

interface UserPreferences extends Omit<UserSettings, 'createdAt' | 'updatedAt'> {
  emailNotifications: boolean
  twoFactorEnabled: boolean
  marketingEmails: boolean
  activityDigest: boolean
}

interface ExtendedUserProfile extends Omit<User, 'createdAt' | 'updatedAt'> {
  preferences: UserPreferences
  roles: string[]
  createdAt: Date
  updatedAt: Date
}

export default function ProfilePage() {
  return (
    <ErrorBoundary>
      <ProfileContent />
    </ErrorBoundary>
  )
}

function ProfileContent() {
  const { user } = useAuth()
  const { showMessage } = useToastMessage()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [profile, setProfile] = useState<ExtendedUserProfile | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user?.uid) {
      void fetchUserProfile()
    }
  }, [user?.uid])

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const userDoc = await getDoc(doc(db, 'users', user!.uid))
      const settingsDoc = await getDoc(doc(db, 'userSettings', user!.uid))

      if (!userDoc.exists()) {
        throw new Error('User profile not found')
      }

      const userData = userDoc.data() as User
      const settingsData = settingsDoc.exists() 
        ? settingsDoc.data() as UserSettings
        : {
            emailNotifications: true,
            twoFactorEnabled: false,
            marketingEmails: true,
            activityDigest: true,
          }

      setProfile({
        ...userData,
        createdAt: userData.createdAt?.toDate() || new Date(),
        updatedAt: userData.updatedAt?.toDate() || new Date(),
        preferences: {
          emailNotifications: settingsData.emailNotifications ?? true,
          twoFactorEnabled: settingsData.twoFactorEnabled ?? false,
          marketingEmails: settingsData.marketingEmails ?? true,
          activityDigest: settingsData.activityDigest ?? true,
        },
        roles: userData.roles || [],
      })
    } catch (err) {
      console.error('Error fetching profile:', err)
      setError(err instanceof Error ? err.message : 'Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  const handlePreferenceChange = async (key: keyof UserPreferences) => {
    if (!profile || !user?.uid) return

    try {
      setSaving(true)
      const newPreferences = {
        ...profile.preferences,
        [key]: !profile.preferences[key],
      }

      await setDoc(
        doc(db, 'userSettings', user.uid),
        {
          ...newPreferences,
          updatedAt: Timestamp.now(),
        },
        { merge: true }
      )

      setProfile({
        ...profile,
        preferences: newPreferences,
      })

      showMessage('Preferences updated successfully', 'success')
    } catch (err) {
      console.error('Error updating preferences:', err)
      showMessage('Failed to update preferences', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleProfileUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!profile || !user?.uid) return

    try {
      setSaving(true)
      await updateDoc(doc(db, 'users', user.uid), {
        ...profile,
        updatedAt: Timestamp.now(),
      })
      showMessage('Profile updated successfully', 'success')
    } catch (err) {
      console.error('Error updating profile:', err)
      showMessage('Failed to update profile', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (error) {
    return (
      <Alert severity="error" className="m-4">
        {error}
      </Alert>
    )
  }

  if (!profile) {
    return (
      <Alert severity="warning" className="m-4">
        Profile not found
      </Alert>
    )
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Grid container spacing={4}>
        {/* Profile Overview */}
        <Grid item xs={12} md={4}>
          <Paper className="p-6">
            <Box className="text-center">
              <Avatar
                src={profile.photoURL || undefined}
                className="mx-auto h-24 w-24"
              />
              <Typography variant="h6" className="mt-4">
                {profile.displayName}
              </Typography>
              <Typography color="textSecondary" className="mt-1">
                {profile.email}
              </Typography>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {profile.roles.map((role) => (
                  <Chip
                    key={role}
                    label={role}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </div>
            </Box>
          </Paper>
        </Grid>

        {/* Settings & Preferences */}
        <Grid item xs={12} md={8}>
          <Paper className="p-6">
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EnvelopeIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText
                  primary="Email Notifications"
                  secondary="Receive email updates about your account"
                />
                <Switch
                  edge="end"
                  checked={profile.preferences.emailNotifications}
                  disabled={saving}
                  onChange={() => handlePreferenceChange('emailNotifications')}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ShieldCheckIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText
                  primary="Two-Factor Authentication"
                  secondary="Add an extra layer of security"
                />
                <Switch
                  edge="end"
                  checked={profile.preferences.twoFactorEnabled}
                  disabled={saving}
                  onChange={() => handlePreferenceChange('twoFactorEnabled')}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BellAlertIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText
                  primary="Marketing Emails"
                  secondary="Receive updates about new features and promotions"
                />
                <Switch
                  edge="end"
                  checked={profile.preferences.marketingEmails}
                  disabled={saving}
                  onChange={() => handlePreferenceChange('marketingEmails')}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DocumentTextIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText
                  primary="Activity Digest"
                  secondary="Get a weekly summary of your account activity"
                />
                <Switch
                  edge="end"
                  checked={profile.preferences.activityDigest}
                  disabled={saving}
                  onChange={() => handlePreferenceChange('activityDigest')}
                />
              </ListItem>
            </List>
          </Paper>

          <Paper className="mt-4 p-6">
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <form onSubmit={handleProfileUpdate}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Display Name"
                    value={profile.displayName || ''}
                    onChange={(e) =>
                      setProfile({ ...profile, displayName: e.target.value })
                    }
                    disabled={saving}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profile.email || ''}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={saving}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
} 