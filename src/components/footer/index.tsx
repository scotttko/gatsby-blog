import * as S from './styles'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      © {new Date().getFullYear()}
      <S.FooterLink href="https://github.com/scotttko" target="_blank">
        scottko
      </S.FooterLink>
      Built with
      <S.FooterLink href="https://www.gatsbyjs.com/" target="_blank">
        Gatsby
      </S.FooterLink>
    </S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
