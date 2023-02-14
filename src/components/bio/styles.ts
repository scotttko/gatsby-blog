import styled from '@emotion/styled'

export const BioWrapper = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  gap: 12px;
  padding: 48px 0;
  width: 100%;
`

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BioTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 12px;
`

export const BioSubtitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-bottom: 18px;
`

export const BioContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 8px;

  strong {
    font-weight: 700;
  }
`

export const BioSocialWrapper = styled.div`
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
