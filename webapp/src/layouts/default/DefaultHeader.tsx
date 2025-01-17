import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'

export default function DefaultHeader() {
  const { user, signOut } = useAuthContext()

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="text.primary">
              Taxfy
            </Typography>
          </Link>
        </Box>
        {user ? (
          <Button color="inherit" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Link href="/auth/login" passHref style={{ textDecoration: 'none' }}>
            <Button color="inherit">Sign In</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  )
}
