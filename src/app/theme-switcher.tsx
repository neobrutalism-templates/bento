'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button
        className="border-border dark:border-darkBorder dark:bg-secondaryBlack mt-6 h-11 w-11 border-2 bg-white p-0"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="stroke-darkText hidden h-6 w-6 dark:inline" />
        <Moon className="stroke-text inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
