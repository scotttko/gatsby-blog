import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px 0;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 8px;
  padding: 16px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 36px;
  }
`

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const PostItemDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.subTextColor};
  text-align: end;
`
