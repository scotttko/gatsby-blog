import { Link } from 'gatsby'
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme'
import GlobalStyles from 'styles/GlobalStyles'
import { ReactNode } from 'react'
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
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </S.Wrapper>
      {/* <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> */}
    </ThemeProvider>
  )
}

export default Layout
