import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export default function AuthHeader() {
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
      </Toolbar>
    </AppBar>
  )
}
