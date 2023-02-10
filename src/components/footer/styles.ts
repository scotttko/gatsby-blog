import styled from '@emotion/styled'

export const FooterWrapper = styled.footer`
  display: flex;
  /* justify-content: center; */
  width: 100%;
  height: 60px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: 0 32px;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1152px;
  font-size: 14px;
`
