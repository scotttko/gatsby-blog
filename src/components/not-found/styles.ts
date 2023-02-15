import styled from '@emotion/styled'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0;
  width: 100%;
`

export const NotFoundTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 12px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 36px;
    margin-bottom: 8px;
  }
`
