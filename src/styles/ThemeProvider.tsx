import useTheme from 'hooks/useTheme'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createContext, ReactNode, useEffect, useMemo } from 'react'
import { ThemeType } from 'types'
import { darkTheme, lightTheme } from './theme'
import GlobalStyles from './GlobalStyles'

interface ThemeContextTypes {
  theme: ThemeType
  toggleTheme: () => void
}

const initialState: ThemeContextTypes = {
  theme: 'dark',
  toggleTheme: () => {},
}

export const ThemeContext = createContext(initialState)

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useTheme()

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  useEffect(() => {
    document.body.classList.remove('dark')
  }, [])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <EmotionThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
