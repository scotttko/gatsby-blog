import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`
export const PostItemContainer = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgColor};
  }
`
export const PostItemTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const PostItemDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
`

export const PostItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const PostItemCategory = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
`

export const PostItemDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.subTextColor};
  margin-left: auto;
`
