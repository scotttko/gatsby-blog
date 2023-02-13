import { ThemeProvider } from '@emotion/react'
import GlobalStyles from 'styles/GlobalStyles'
import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { darkTheme, lightTheme } from 'styles/theme'
import useTheme from 'hooks/useTheme'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import * as S from './styles'
import '../styles/style.scss'

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}
const Layout = ({ location, title, children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <S.Wrapper>
        <Header location={location}>
          <S.ThemeButton onClick={() => toggleTheme()} type="button">
            {theme === 'light' ? <BsFillSunFill size={24} /> : <BsFillMoonStarsFill size={24} />}
          </S.ThemeButton>
        </Header>
        <S.MainContainer>{children}</S.MainContainer>
        <Footer>
          © {new Date().getFullYear()}
          <S.FooterLink href="https://github.com/SangWonKo" target="_blank">
            {title}
          </S.FooterLink>
          Built with
          <S.FooterLink href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </S.FooterLink>
        </Footer>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
