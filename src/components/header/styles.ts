import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';

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
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1152px;
  padding: 0 32px;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0 20px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${MOBILE_MEDIA_QUERY} {
    justify-content: space-between;
  }
`;

export const HeaderMenuList = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)<{ selected: boolean; padding?: string }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ selected, theme }) => (selected ? '#0a87ef' : theme.palette.mainTextColor)};
  padding: ${({ padding }) => padding || '6px 12px'};
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgColor};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
    padding: ${({ padding }) => padding || '4px 8px'};
  }
`;

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  border-radius: 8px;
  color: #fbcc13;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgColor};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    position: absolute;
    top: 50px;
    right: 20px;
  }
`;
