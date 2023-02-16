import { useEffect, useState } from 'react'
import { ThemeType } from 'types'
import { DARK_THEME, LIGHT_THEME } from 'components/utterances'

const utteranceExludedPath = ['/', '/posts/', '/about/']

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

  useEffect(() => {
    const { pathname } = document.location
    if (utteranceExludedPath.includes(pathname)) return

    const message = {
      type: 'set-theme',
      theme: theme === 'light' ? LIGHT_THEME : DARK_THEME,
    }

    const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

    const value = localStorage.getItem('theme') as ThemeType

    if (iframe && value) {
      iframe.contentWindow?.postMessage(message, 'https://utteranc.es')
    }
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
