"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force light theme only
  return (
    <NextThemesProvider {...props} forcedTheme="light">
      {children}
    </NextThemesProvider>
  )
}
