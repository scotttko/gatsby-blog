import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import * as S from './styles'
import '../styles/style.scss'

interface LayoutProps {
  location: Location
  // title: string
  children: ReactNode
}
const Layout = ({ location, children }: LayoutProps) => (
  <S.Wrapper>
    <Header location={location} />

    <S.MainContainer>{children}</S.MainContainer>
    <Footer />
  </S.Wrapper>
)

export default Layout
