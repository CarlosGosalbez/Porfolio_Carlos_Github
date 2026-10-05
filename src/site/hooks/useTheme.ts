import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const preferenceKey = 'carlos-portfolio-theme'

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(preferenceKey)
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.dataset.theme = saved
      return saved
    }
  } catch {
    // Keep the site usable when storage is disabled.
  }

  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = preferred
  return preferred
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171d1a' : '#fbfaf7')
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(preferenceKey, next)
    } catch {
      // The current page still changes even if the preference cannot be saved.
    }
    setTheme(next)
  }

  return { theme, toggleTheme }
}
