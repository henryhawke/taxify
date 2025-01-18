import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import UserLayout from '@/layouts/user/UserLayout'
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
  CircularProgress,
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

export default function UserProfilePage() {
  const { user } = useAuth()
  const addToast = useToastMessage()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<ExtendedUserProfile>({
    id: user?.uid || '',
    uid: user?.uid || '',
    email: user?.email || '',
    username: user?.email?.split('@')[0] || '',
    displayName: '',
    bio: '',
    iconUrl: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    preferences: {
      userId: user?.uid || '',
      theme: 'system',
      language: 'en',
      notifications: true,
      emailNotifications: true,
      twoFactorEnabled: false,
      marketingEmails: true,
      activityDigest: true,
    },
    roles: ['user']
  })

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.uid) return
      
      setLoading(true)
      try {
        // Fetch user document
        const userDoc = await getDoc(doc(db, 'User', user.uid))
        const userSettings = await getDoc(doc(db, 'User', user.uid, 'UserSettings', user.uid))
        
        if (userDoc.exists()) {
          const userData = userDoc.data()
          const settingsData = userSettings.exists() ? userSettings.data() as UserSettings : null

          setProfile(prev => ({
            ...prev,
            ...userData,
            createdAt: (userData.createdAt as Timestamp).toDate(),
            updatedAt: (userData.updatedAt as Timestamp).toDate(),
            preferences: {
              ...prev.preferences,
              ...(settingsData || {}),
            }
          }))
        } else {
          // Create user document if it doesn't exist
          const newUser = {
            id: user.uid,
            uid: user.uid,
            email: user.email || '',
            username: user.email?.split('@')[0] || '',
            displayName: '',
            bio: '',
            iconUrl: '',
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
          }
          await setDoc(doc(db, 'User', user.uid), newUser)
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
        addToast({
          title: 'Error',
          description: 'Failed to load profile data',
          type: 'error'
        })
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [user, addToast])

  const handlePreferenceChange = async (key: keyof UserPreferences) => {
    if (!user?.uid) return

    try {
      const newPreferences = {
        ...profile.preferences,
        [key]: !profile.preferences[key],
        updatedAt: Timestamp.now()
      }

      await setDoc(doc(db, 'User', user.uid, 'UserSettings', user.uid), 
        newPreferences,
        { merge: true }
      )

      setProfile(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [key]: !prev.preferences[key]
        }
      }))

      addToast({
        title: 'Success',
        description: 'Preferences updated successfully',
        type: 'success'
      })
    } catch (error) {
      console.error('Error updating preferences:', error)
      addToast({
        title: 'Error',
        description: 'Failed to update preferences',
        type: 'error'
      })
    }
  }

  const handleProfileUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!user?.uid) return

    try {
      const updateData = {
        displayName: profile.displayName,
        bio: profile.bio,
        updatedAt: Timestamp.now()
      }

      await updateDoc(doc(db, 'User', user.uid), updateData)

      setProfile(prev => ({
        ...prev,
        ...updateData,
        updatedAt: new Date()
      }))

      addToast({
        title: 'Success',
        description: 'Profile updated successfully',
        type: 'success'
      })
    } catch (error) {
      console.error('Error updating profile:', error)
      addToast({
        title: 'Error',
        description: 'Failed to update profile',
        type: 'error'
      })
    }
  }

  if (loading) {
    return (
      <UserLayout>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <CircularProgress />
        </Box>
      </UserLayout>
    )
  }

  return (
    <UserLayout>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Profile Overview */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                src={profile.iconUrl}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {profile.displayName || profile.username || 'Anonymous User'}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {profile.email}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {profile.roles.map(role => (
                  <Chip
                    key={role}
                    label={role}
                    color="primary"
                    size="small"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
            </Paper>

            {/* Quick Stats */}
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Account Statistics
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DocumentTextIcon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Tax Reports"
                    secondary="3 Generated"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CreditCardIcon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Transactions"
                    secondary="156 Processed"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Profile Settings */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Profile Information
              </Typography>
              <Box component="form" onSubmit={handleProfileUpdate}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Display Name"
                      value={profile.displayName}
                      onChange={(e) => setProfile(prev => ({
                        ...prev,
                        displayName: e.target.value
                      }))}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Bio"
                      multiline
                      rows={3}
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({
                        ...prev,
                        bio: e.target.value
                      }))}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Update Profile
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>

            {/* Preferences */}
            <Paper sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Preferences & Security
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EnvelopeIcon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive email notifications about your account"
                  />
                  <Switch
                    edge="end"
                    checked={profile.preferences.emailNotifications}
                    onChange={() => handlePreferenceChange('emailNotifications')}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ShieldCheckIcon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Two-Factor Authentication"
                    secondary="Add an extra layer of security to your account"
                  />
                  <Switch
                    edge="end"
                    checked={profile.preferences.twoFactorEnabled}
                    onChange={() => handlePreferenceChange('twoFactorEnabled')}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BellAlertIcon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Activity Digest"
                    secondary="Receive weekly summaries of your account activity"
                  />
                  <Switch
                    edge="end"
                    checked={profile.preferences.activityDigest}
                    onChange={() => handlePreferenceChange('activityDigest')}
                  />
                </ListItem>
              </List>
            </Paper>

            {/* Danger Zone */}
            <Paper sx={{ p: 3, mt: 3, bgcolor: 'error.light' }}>
              <Typography variant="h6" color="error.contrastText" gutterBottom>
                Danger Zone
              </Typography>
              <Alert severity="warning" sx={{ mb: 2 }}>
                These actions are irreversible. Please proceed with caution.
              </Alert>
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => {
                  addToast({
                    title: 'Warning',
                    description: 'This feature is not yet implemented',
                    type: 'warning'
                  })
                }}
              >
                Delete Account
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </UserLayout>
  )
} 