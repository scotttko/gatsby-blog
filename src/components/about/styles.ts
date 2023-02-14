import styled from '@emotion/styled'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px 48px;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 24px 0;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 8px;
  padding: 16px;
`
