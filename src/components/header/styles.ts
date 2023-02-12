import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 60px; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10px 0;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme }) => theme.palette.white};
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1152px;
  padding: 0 32px;
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderLink = styled(Link)<{ selected: boolean; padding?: string }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1.5;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  padding: ${({ padding }) => padding || '6px 12px'};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.black};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey10};
  }
`
