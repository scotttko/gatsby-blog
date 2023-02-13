import styled from '@emotion/styled'
import { Link } from 'gatsby'

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
  font-size: 20px;
  line-height: 1.5;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.grey10};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey20};
  }
`
