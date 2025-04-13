import { StaticImage } from 'gatsby-plugin-image';
import ThemeToggle from './ThemeToggle';
import * as S from './styles';

interface HeaderProps {
  location: Location;
}
const Header = ({ location }: HeaderProps) => {
  const { pathname } = location;

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

          <S.HeaderMenuList>
            <S.HeaderLink to="/posts" selected={pathname === '/posts/'}>
              Posts
            </S.HeaderLink>
            <S.HeaderLink to="/about" selected={pathname === '/about/'}>
              About
            </S.HeaderLink>
            <S.HeaderLink to="/projects" selected={pathname === '/projects/'}>
              Projects
            </S.HeaderLink>
          </S.HeaderMenuList>
        </S.HeaderMenu>

        <ThemeToggle />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
