import { ReactNode } from 'react'
import * as S from './styles'

interface FooterProps {
  children: ReactNode
}
const Footer = ({ children }: FooterProps) => (
  <S.FooterWrapper>
    <S.FooterContainer>{children}</S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
