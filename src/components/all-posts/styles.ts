import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostItemContainer = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.buttonBgColor};
  }
`;

export const PostItemImage = styled(GatsbyImage)`
  border-radius: 8px;
  max-width: 200px;
  width: 100%;
  height: 123px;

  @media ${MOBILE_MEDIA_QUERY} {
    display: none;
    max-width: none;
  }
`;

export const PostItemTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 10px;
`;

export const PostItemDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const PostItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
`;

export const PostItemCategory = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
`;

export const PostItemDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.subTextColor};
  margin-left: auto;
`;
