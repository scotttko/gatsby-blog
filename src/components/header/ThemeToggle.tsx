import { ThemeContext } from 'styles/ThemeProvider';
import { useContext } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import * as S from './styles';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  return (
    <S.ThemeButton onClick={toggleTheme} type="button">
      {theme === 'light' ? <BsFillSunFill size={24} /> : <BsFillMoonStarsFill size={24} />}
    </S.ThemeButton>
  );
}

export default ThemeToggle;
