import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import ThemeProvider from 'styles/ThemeProvider'
import * as S from './styles'
import '../styles/style.scss'

interface LayoutProps {
  location: Location
  // title: string
  children: ReactNode
}
const Layout = ({ location, children }: LayoutProps) => (
  <ThemeProvider>
    <S.Wrapper>
      <Header location={location} />

      <S.MainContainer>{children}</S.MainContainer>
      <Footer>
        © {new Date().getFullYear()}
        <S.FooterLink href="https://github.com/SangWonKo" target="_blank">
          scottko
        </S.FooterLink>
        Built with
        <S.FooterLink href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </S.FooterLink>
      </Footer>
    </S.Wrapper>
  </ThemeProvider>
)

export default Layout
