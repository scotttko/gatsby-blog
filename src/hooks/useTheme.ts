import { useCallback, useEffect, useState } from 'react';
import { ThemeType } from 'types';
import { DARK_THEME, LIGHT_THEME } from 'components/utterances';

const utteranceExludedPath = ['/', '/posts/', '/about/'];

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as ThemeType | null;
    const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (isSystemDarkMode ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    window.localStorage.setItem('theme', newTheme);
  }, [theme]);

  useEffect(() => {
    const { pathname } = document.location;
    if (utteranceExludedPath.includes(pathname)) return;

    const message = {
      type: 'set-theme',
      theme: theme === 'light' ? LIGHT_THEME : DARK_THEME,
    };

    const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame');

    const value = localStorage.getItem('theme') as ThemeType;

    if (iframe && value) {
      iframe.contentWindow?.postMessage(message, 'https://utteranc.es');
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
