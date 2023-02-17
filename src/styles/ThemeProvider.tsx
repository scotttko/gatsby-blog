import { DARK_THEME, LIGHT_THEME } from 'components/utterances'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeType } from 'types'

const utteranceExludedPath = ['/', '/posts/', '/about/']

interface ThemeContextTypes {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
  toggleTheme: () => void
}

const initialState: ThemeContextTypes = {
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
}

export const ThemeContext = createContext(initialState)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('dark')

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as ThemeType | null
      if (savedTheme !== null) {
        setTheme(savedTheme)
      } else {
        const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
        setTheme(matches ? 'dark' : 'light')
      }
    }
  }, [])

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

  const themeContextValue = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
