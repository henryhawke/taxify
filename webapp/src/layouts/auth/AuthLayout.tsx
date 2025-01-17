import { ReactNode } from 'react'
import AuthHeader from './AuthHeader'
import { Box } from '@mui/material'

interface Props {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <AuthHeader />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
