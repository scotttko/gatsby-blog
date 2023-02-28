import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { MOBILE_MEDIA_QUERY } from 'styles/theme'

export const BioWrapper = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  gap: 12px;
  padding: 48px 0;
  width: 100%;
`

export const BioContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

export const BioTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 12px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 36px;
    margin-bottom: 8px;
  }
`

export const BioSubtitle = styled(motion.h2)`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-bottom: 18px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 20px;
    margin-bottom: 12px;
  }
`

export const BioContent = styled(motion.p)`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 8px;

  strong {
    font-weight: 700;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
  }
`

export const BioSocialWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    font-size: 18px;
    background-color: ${({ theme }) => theme.palette.buttonBgColor};
    border-radius: 12px;
    padding: 8px 12px;

    &:hover {
      background-color: ${({ theme }) => theme.palette.buttonBgHoverColor};
    }
  }
`
