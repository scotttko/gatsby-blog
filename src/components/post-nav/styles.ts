import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const PostNavWrapper = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  margin-bottom: 32px;
`

export const PostNavLink = styled(Link)<{ dir: 'prev' | 'next' }>`
  display: flex;
  align-items: center;
  margin: ${({ dir }) => (dir === 'next' ? '0 0 0 auto' : '0 auto 0 0')};
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.mainTextColor};
  background-color: ${({ theme }) => theme.palette.buttonBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 14px;
  }
`
