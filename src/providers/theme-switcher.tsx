'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/solid'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return <SunIcon className="h-6 w-6" onClick={() => setTheme('light')} />
    }
    return <MoonIcon className="h-6 w-6" onClick={() => setTheme('dark')} />
  }

  return <>{renderThemeChanger()}</>
}
