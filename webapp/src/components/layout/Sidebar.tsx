import { useRouter } from 'next/router'

import { useAuthContext } from '@/contexts/AuthContext'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import {
  HomeIcon,
  UserIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

interface SidebarProps {
  onClose?: () => void
}

export default function Sidebar({ onClose }: SidebarProps) {
  const router = useRouter()
  const { isAuthenticated, signOut } = useAuthContext()
  const { isPhantomConnected } = usePhantomAuth()

  const handleNavigation = (path: string) => {
    router.push(path)
    onClose?.()
  }

  const handleSignOut = async () => {
    await signOut()
    onClose?.()
  }

  return (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation('/')}>
            <ListItemIcon>
              <HomeIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        {isAuthenticated && isPhantomConnected && (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/profile')}>
                <ListItemIcon>
                  <UserIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigation('/tax-calculator')}
              >
                <ListItemIcon>
                  <CurrencyDollarIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText primary="Tax Calculator" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/tax-report')}>
                <ListItemIcon>
                  <DocumentTextIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText primary="Tax Report" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleSignOut}>
                <ListItemIcon>
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  )
}
