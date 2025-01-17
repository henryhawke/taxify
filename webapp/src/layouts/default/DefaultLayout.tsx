import { Box } from '@mui/material'
import DefaultHeader from './DefaultHeader'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box>
      <DefaultHeader />
      <main>{children}</main>
    </Box>
  )
}
