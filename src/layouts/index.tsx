import { Link } from 'gatsby'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import GlobalStyles from 'styles/GlobalStyles'
import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import * as S from './styles'

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}
const Layout = ({ location, title, children }: LayoutProps) => {
  const isRootPath = location.pathname === '/'
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <Header location={location}>{header}</Header>
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
