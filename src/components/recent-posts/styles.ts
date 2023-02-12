import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const RecentPostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-bottom: 24px;
`

export const RecentPostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 16px;
  width: 100%;
`

export const RecentPostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey10};
  border-radius: 8px;
`

export const CardThumb = styled.div`
  background-color: ${({ theme }) => theme.palette.grey20};
  width: 100%;
  /* height: 100%; */
  height: 160px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardContent = styled.div`
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
`

export const CardDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
`

export const PostLink = styled(Link)`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  /* display: block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } */
`
