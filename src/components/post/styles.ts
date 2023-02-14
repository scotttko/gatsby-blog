import styled from '@emotion/styled'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px 0;
`

export const PostHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.palette.buttonBgHoverColor};
  margin-bottom: 32px;
`

export const PostTitle = styled.h1`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 8px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 28px;
  }
`

export const PostDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.subTextColor};
`
