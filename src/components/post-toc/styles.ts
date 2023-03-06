import styled from '@emotion/styled'

export const PostTocWrapper = styled.div`
  margin-left: auto;
`

export const TocCard = styled.div`
  width: 250px;
  position: sticky;
  top: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.buttonBgColor};
  border-radius: 14px;
`

export const TocTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.mainTextColor};
  margin-bottom: 12px;
`

export const TocContainer = styled.div`
  font-size: 14px;
  line-height: 1.8;

  ul > li > ul {
    padding-left: 16px;
  }

  a {
    color: ${({ theme }) => theme.palette.subTextColor};
  }

  a.active {
    color: #0a87ef;
    font-weight: 600;
    display: block;
    transition: all 0.05s ease-in;
    transform: scale(1.05);
    will-change: transform;
  }
`
