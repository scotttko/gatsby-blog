import useTheme from 'hooks/useTheme';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, ReactNode, useMemo } from 'react';
import { ThemeType } from 'types';
import { defaultTheme } from './theme';
import GlobalStyles from './GlobalStyles';

interface ThemeContextTypes {
  theme: ThemeType | null;
  toggleTheme: () => void;
}

const initialState: ThemeContextTypes = {
  theme: null,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useTheme();

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <EmotionThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
