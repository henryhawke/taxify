import { useEffect, useState } from 'react'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import LoadingScreen from '@/components/common/LoadingScreen'
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Button,
  Alert,
  Divider,
} from '@mui/material'
import {
  BellAlertIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { useToastMessage } from '@/hooks/useToastMessage'

interface Settings {
  notifications: {
    push: boolean
    email: boolean
    sms: boolean
  }
  security: {
    twoFactor: boolean
    biometric: boolean
  }
  preferences: {
    currency: string
    language: string
  }
}

export default function SettingsPage() {
  return (
    <ErrorBoundary>
      <SettingsContent />
    </ErrorBoundary>
  )
}

function SettingsContent() {
  const { showMessage } = useToastMessage()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [settings, setSettings] = useState<Settings>({
    notifications: {
      push: true,
      email: true,
      sms: false,
    },
    security: {
      twoFactor: false,
      biometric: false,
    },
    preferences: {
      currency: 'USD',
      language: 'en',
    },
  })

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true)
        setError(null)
        // Add your settings loading logic here
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated loading
      } catch (err) {
        console.error('Error loading settings:', err)
        setError(err instanceof Error ? err.message : 'Failed to load settings')
      } finally {
        setLoading(false)
      }
    }

    void loadSettings()
  }, [])

  const handleSettingChange = async (
    category: keyof Settings,
    setting: string,
    value: boolean
  ) => {
    try {
      setSaving(true)
      // Add your settings update logic here
      await new Promise(resolve => setTimeout(resolve, 500)) // Simulated saving

      setSettings(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [setting]: value,
        },
      }))

      showMessage('Settings updated successfully', 'success')
    } catch (err) {
      console.error('Error updating setting:', err)
      showMessage('Failed to update settings', 'error')
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

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Notifications */}
      <Paper className="mb-6 p-6">
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <BellAlertIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText
              primary="Push Notifications"
              secondary="Receive push notifications for important updates"
            />
            <Switch
              edge="end"
              checked={settings.notifications.push}
              disabled={saving}
              onChange={(e) =>
                handleSettingChange('notifications', 'push', e.target.checked)
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <BellAlertIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText
              primary="Email Notifications"
              secondary="Receive email notifications for important updates"
            />
            <Switch
              edge="end"
              checked={settings.notifications.email}
              disabled={saving}
              onChange={(e) =>
                handleSettingChange('notifications', 'email', e.target.checked)
              }
            />
          </ListItem>
        </List>
      </Paper>

      {/* Security */}
      <Paper className="mb-6 p-6">
        <Typography variant="h6" gutterBottom>
          Security
        </Typography>
        <List>
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
              checked={settings.security.twoFactor}
              disabled={saving}
              onChange={(e) =>
                handleSettingChange('security', 'twoFactor', e.target.checked)
              }
            />
          </ListItem>
        </List>
      </Paper>

      {/* Preferences */}
      <Paper className="p-6">
        <Typography variant="h6" gutterBottom>
          Preferences
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CurrencyDollarIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText
              primary="Default Currency"
              secondary="Set your preferred currency for calculations"
            />
            <Button
              variant="outlined"
              size="small"
              disabled={saving}
              onClick={() => {
                // Add currency selection logic
              }}
            >
              {settings.preferences.currency}
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <GlobeAltIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText
              primary="Language"
              secondary="Set your preferred language"
            />
            <Button
              variant="outlined"
              size="small"
              disabled={saving}
              onClick={() => {
                // Add language selection logic
              }}
            >
              {settings.preferences.language.toUpperCase()}
            </Button>
          </ListItem>
        </List>
      </Paper>
    </Container>
  )
} 