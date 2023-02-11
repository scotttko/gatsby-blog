import { useEffect, useState } from 'react'

type ThemeType = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = window.localStorage.getItem('theme') as ThemeType | null
    if (savedTheme !== null) {
      return savedTheme
    }

    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    return matches ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
