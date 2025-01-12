import { ReactElement } from 'react'
import type { NextPage } from 'next'
import type { Router } from 'next/router'
import { useAuthContext } from '@/contexts/AuthContext'
import Sidebar from '@/components/layout/Sidebar'
import { Box, Container } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  Component: NextPage
  pageProps: any
  router: Router
}

export default function Layout({
  Component,
  pageProps,
  router,
}: Props): ReactElement {
  const { isAuthenticated } = useAuthContext()
  const isAuthPage = router.pathname.startsWith('/auth/')
  const isLandingPage =
    router.asPath === '/' ||
    router.asPath === '/en' ||
    router.asPath === '/en/' ||
    router.pathname === '/' ||
    router.pathname === '/en'

  // Don't show sidebar on auth pages or landing page
  if (isAuthPage || isLandingPage) {
    return <Component {...pageProps} />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {isAuthenticated && !isLandingPage && <Sidebar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width:
            isAuthenticated && !isLandingPage
              ? { sm: `calc(100% - ${240}px)` }
              : '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            p: 0,
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>
    </Box>
  )
}
