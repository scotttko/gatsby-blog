import styled from '@emotion/styled';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: scroll;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 16px;

  @media ${MOBILE_MEDIA_QUERY} {
    gap: 12px;
  }
`;

export const CategoryItem = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1;
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  padding: 8px 14px;
  border-radius: 10px;
  color: ${({ theme, selected }) =>
    selected ? theme.palette.mainTextColor : theme.palette.subTextColor};
  background-color: ${({ theme, selected }) =>
    selected ? theme.palette.buttonBgHoverColor : theme.palette.buttonBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
    padding: 6px 12px;
  }
`;
