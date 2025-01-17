import React from 'react'
import AuthLayout from '@/layouts/auth/AuthLayout'
import LoginForm from '@/components/pages/auth/LoginForm'
import { Box } from '@mui/material'

export default function LoginPage() {
  return (
    <AuthLayout>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 100%)',
        }}
      >
        <LoginForm />
      </Box>
    </AuthLayout>
  )
}
