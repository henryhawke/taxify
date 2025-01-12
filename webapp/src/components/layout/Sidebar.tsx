import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'
import { usePhantomAuth } from '@/hooks/usePhantomAuth'
import {
  HomeIcon,
  CalculatorIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  useTheme,
  styled,
} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useCallback } from 'react'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  ...theme.mixins.toolbar,
}))

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { name: 'Tax Calculator', path: '/tax-calculator', icon: CalculatorIcon },
  { name: 'Portfolio', path: '/portfolio', icon: ChartBarIcon },
  { name: 'Documents', path: '/documents', icon: DocumentTextIcon },
  { name: 'Settings', path: '/settings', icon: Cog8ToothIcon },
]

export default function Sidebar() {
  const router = useRouter()
  const { user } = useAuthContext()
  const { signOut } = usePhantomAuth()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleSignOut = useCallback(async () => {
    await signOut()
    router.push('/auth/login')
  }, [signOut, router])

  const isActivePath = useCallback(
    (path: string) => {
      const currentPath = router.pathname
        .replace(/^\/[^/]+/, '')
        .replace(/\/$/, '')
      const normalizedPath = path.replace(/^\/+/, '').replace(/\/$/, '')
      return currentPath === normalizedPath
    },
    [router.pathname],
  )

  const drawer = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <DrawerHeader>
        <Avatar sx={{ width: 64, height: 64, mb: 2, bgcolor: 'primary.main' }}>
          <UserCircleIcon className="h-10 w-10" />
        </Avatar>
        <Typography variant="subtitle1" sx={{ color: 'text.primary' }}>
          {user?.email || 'Anonymous User'}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {user?.uid?.slice(0, 8) || 'Not Connected'}
        </Typography>
      </DrawerHeader>

      <Divider />

      <List sx={{ flex: 1, pt: 2 }}>
        {navigation.map((item) => {
          const isActive = isActivePath(item.path)
          return (
            <ListItem key={item.name} disablePadding>
              <Link
                href={item.path}
                locale={router.locale}
                style={{ width: '100%', textDecoration: 'none' }}
                scroll={false}
                shallow={true}
                legacyBehavior={false}
              >
                <ListItemButton
                  component="div"
                  selected={isActive}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'action.selected',
                    },
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <item.icon className="h-6 w-6" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      '& .MuiTypography-root': {
                        color: isActive ? 'primary.main' : 'text.primary',
                        transition: 'color 0.2s ease',
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleSignOut}
            sx={{
              transition: 'background-color 0.2s ease',
            }}
          >
            <ListItemIcon sx={{ color: 'text.secondary' }}>
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={!isMobile}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
