'use client'

import { ReactNode } from 'react'
import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { MuiThemeProvider } from './MuiThemeProvider'

type Props = ThemeProviderProps & {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemeProvider {...props}>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </NextThemeProvider>
  )
}
