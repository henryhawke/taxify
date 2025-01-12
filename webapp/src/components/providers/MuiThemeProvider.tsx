import { ReactNode, useMemo } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { useTheme } from 'next-themes'

interface Props {
  children: ReactNode
}

export function MuiThemeProvider({ children }: Props) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: '#7c3aed', // Purple
            light: '#9d5cf5',
            dark: '#6025c9',
          },
          secondary: {
            main: '#10b981', // Emerald
            light: '#34d399',
            dark: '#059669',
          },
          background: {
            default: isDark ? '#0f172a' : '#ffffff', // Slate 900 for dark
            paper: isDark ? '#1e293b' : '#f8fafc', // Slate 800 for dark, Slate 50 for light
          },
          text: {
            primary: isDark ? '#f1f5f9' : '#0f172a', // Slate 100 for dark, Slate 900 for light
            secondary: isDark ? '#94a3b8' : '#475569', // Slate 400 for dark, Slate 600 for light
          },
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundImage: 'none',
                backgroundColor: isDark ? '#1e293b' : '#f8fafc',
                borderRight: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: isDark
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
              },
            },
          },
        },
        shape: {
          borderRadius: 8,
        },
        typography: {
          fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 700,
          },
          h3: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 600,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
          subtitle1: {
            fontWeight: 500,
          },
          subtitle2: {
            fontWeight: 500,
          },
        },
      }),
    [resolvedTheme],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
