import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';

export const RecentPostsWrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-bottom: 24px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

export const RecentPostContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 16px;
  width: 100%;

  @media ${MOBILE_MEDIA_QUERY} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const RecentPostCard = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.buttonBgColor};
  border-radius: 8px;
`;

export const CardThumb = styled.div`
  background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
  width: 100%;
  height: 160px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 12px;
  }
`;

export const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.mainTextColor};

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const CardDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: auto;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 12px;
  }
`;

export const PostLink = styled(Link)`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.subTextColor};

  &:hover {
    color: ${({ theme }) => theme.palette.mainTextColor};
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`;
