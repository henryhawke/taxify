/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router'

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
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
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
  alpha,
  IconButton,
  Tooltip,
} from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useCallback, useState } from 'react'
import useI18nRouter from '@/hooks/useI18nRouter'
import EditUserProfile from '@/components/pages/user/settings/EditUserProfile'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  ...theme.mixins.toolbar,
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  color: theme.palette.primary.contrastText,
  position: 'relative',
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
  backgroundColor: 'transparent',
  border: `3px solid ${theme.palette.common.white}`,
  boxShadow: `0 0 20px ${alpha(theme.palette.common.white, 0.3)}`,
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}))

const EditButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.3),
  },
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
  const { routerPush } = useI18nRouter()
  const [isProfileOpen, setProfileOpen] = useState(false)
  const [isMobileOpen, setMobileOpen] = useState(!isMobile)

  const handleSignOut = useCallback(async () => {
    await signOut()
    router.push('/auth/login')
  }, [signOut, router])

  const isActivePath = useCallback(
    (path: string) => {
      const currentPath = router.asPath.split('/').slice(2).join('/')
      return `/${currentPath}` === path
    },
    [router.asPath],
  )

  const handleNavigation = useCallback(
    (path: string) => {
      const locale = router.locale || 'en'
      router.push(`/${locale}${path}`)
    },
    [router],
  )

  const drawer = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      <DrawerHeader>
        <StyledAvatar
          src={user?.photoURL?.toString() || undefined}
          onClick={() => setProfileOpen(true)}
        >
          <UserCircleIcon className="h-12 w-12 text-white" />
        </StyledAvatar>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'inherit',
            fontWeight: 600,
            cursor: 'pointer',
            '&:hover': { opacity: 0.9 },
          }}
          onClick={() => setProfileOpen(true)}
        >
          {user?.displayName || user?.displayName || 'Anonymous User'}
        </Typography>
        <Typography variant="caption" sx={{ color: 'inherit', opacity: 0.8 }}>
          {user?.email || 'Not Connected'}
        </Typography>
        <Tooltip title="Edit Profile">
          <EditButton size="small" onClick={() => setProfileOpen(true)}>
            <PencilSquareIcon className="h-4 w-4" />
          </EditButton>
        </Tooltip>
      </DrawerHeader>

      <Divider sx={{ opacity: 0.6 }} />

      <List sx={{ flex: 1, pt: 2, px: 1 }}>
        {navigation.map((item) => {
          const isActive = isActivePath(item.path)
          return (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={isActive}
                sx={{
                  borderRadius: 1,
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.25),
                    },
                  },
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    transform: 'translateX(6px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? 'primary.main' : 'text.secondary',
                    minWidth: 40,
                    '& svg': {
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover svg': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  <item.icon className="h-6 w-6" />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'primary.main' : 'text.primary',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      <Divider sx={{ opacity: 0.6 }} />

      <List sx={{ p: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleSignOut}
            sx={{
              borderRadius: 1,
              color: 'error.main',
              '&:hover': {
                backgroundColor: alpha(theme.palette.error.main, 0.1),
                transform: 'translateX(6px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out"
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 500,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={isMobile ? isMobileOpen : true}
          onClose={() => setMobileOpen(false)}
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
              transition: theme.transitions.create(['transform', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              '&:not(.MuiDrawer-paperAnchorDockedLeft)': {
                transform: 'translateX(0) !important',
              },
            },
            '& .MuiBackdrop-root': {
              backgroundColor: alpha(theme.palette.background.default, 0.5),
              backdropFilter: 'blur(4px)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {user && (
        <EditUserProfile
          open={isProfileOpen}
          onClose={() => setProfileOpen(false)}
        />
      )}
    </>
  )
}
