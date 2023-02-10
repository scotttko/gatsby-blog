import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;

  background-color: ${({ theme }) => theme.palette.white};
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  width: 100%;
  max-width: 1152px;
  /* padding-top: 60px; */
  padding: 60px 32px 0;
`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.palette.grey60};
  margin: 0 4px;
`
