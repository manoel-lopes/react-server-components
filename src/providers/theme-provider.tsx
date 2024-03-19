'use client'
import { useState, useEffect } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type ThemeProviderProps = {
  children: string | React.JSX.Element | React.JSX.Element[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemeProvider enableSystem={true} attribute="class">
      {children}
    </NextThemeProvider>
  )
}
