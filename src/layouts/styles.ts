import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
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
  transition: color 0.3s;
  color: ${({ theme }) => theme.palette.grey60};
  margin: 0 4px;
`

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  border-radius: 8px;
  color: #fbcc13;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey10};
  }
`
