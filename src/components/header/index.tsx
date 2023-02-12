import { StaticImage } from 'gatsby-plugin-image'
import { ReactNode } from 'react'
import * as S from './styles'

interface HeaderProps {
  children: ReactNode
  location: Location
}
const Header = ({ children, location }: HeaderProps) => {
  const { pathname } = location

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMenu>
          <S.HeaderLink to="/" selected={pathname === '/'} padding="0">
            <StaticImage src="../../images/logo.png" alt="logo" width={40} height={40} />
          </S.HeaderLink>
          <S.HeaderLink to="/posts" selected={pathname === '/posts/'}>
            Posts
          </S.HeaderLink>
          <S.HeaderLink to="/about" selected={pathname === '/about/'}>
            About
          </S.HeaderLink>
        </S.HeaderMenu>

        {children}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
