import styled from '@emotion/styled';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;
  /* transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme }) => theme.palette.bgColor};
  color: ${({ theme }) => theme.palette.mainTextColor}; */
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  width: 100%;
  max-width: 1152px;
  /* padding-top: 60px; */
  padding: 60px 32px 0;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 60px 20px 0;
  }
`;

export const FooterLink = styled.a`
  transition: color 0.3s;
  /* color: ${({ theme }) => theme.palette.subTextColor}; */
  margin: 0 4px;
`;
