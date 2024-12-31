import { StaticImage } from 'gatsby-plugin-image';
import { useContext } from 'react';
import { ThemeContext } from 'styles/ThemeProvider';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

import * as S from './styles';

interface HeaderProps {
  location: Location;
}
const Header = ({ location }: HeaderProps) => {
  const { pathname } = location;
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMenu>
          <S.HeaderLink to="/" selected={pathname === '/'} padding="0">
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              width={40}
              height={40}
              placeholder="blurred"
            />
          </S.HeaderLink>
          <S.HeaderLink to="/posts" selected={pathname === '/posts/'}>
            Posts
          </S.HeaderLink>
          <S.HeaderLink to="/about" selected={pathname === '/about/'}>
            About
          </S.HeaderLink>
        </S.HeaderMenu>

        {theme && (
          <S.ThemeButton onClick={toggleTheme} type="button">
            {theme === 'light' ? <BsFillSunFill size={24} /> : <BsFillMoonStarsFill size={24} />}
          </S.ThemeButton>
        )}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
