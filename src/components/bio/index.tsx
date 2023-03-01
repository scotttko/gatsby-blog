import { GatsbyImage } from 'gatsby-plugin-image'
import { useMediaQuery } from 'react-responsive'
import { MOBILE_MAXWIDTH } from 'styles/theme'
import { Image, SiteMetadata } from 'types'
import { fadeInVariants, staggerVariants } from 'utils/animations'

import * as S from './styles'

interface BioProps {
  data: {
    metaData: SiteMetadata
    image: Image
  }
}
const Bio = ({ data }: BioProps) => {
  const isMobile = useMediaQuery({ query: MOBILE_MAXWIDTH })
  const { title, author, social } = data.metaData
  const img = data.image

  return (
    <S.BioWrapper>
      <S.BioContainer variants={staggerVariants}>
        {title && <S.BioTitle variants={fadeInVariants}>{title}</S.BioTitle>}
        <S.BioSubtitle variants={fadeInVariants}>Front-End Engineer</S.BioSubtitle>
        {author?.name && (
          <S.BioContent variants={fadeInVariants}>
            Written by <strong>{author.name}</strong> {author?.summary || null}
          </S.BioContent>
        )}
        <S.BioSocialWrapper variants={fadeInVariants}>
          <a href={social?.github || ``} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={social?.email ? `mailto:${social.email}` : ``}>Email</a>
        </S.BioSocialWrapper>
      </S.BioContainer>
      {!isMobile && (
        <GatsbyImage
          image={img.childImageSharp.gatsbyImageData}
          alt="profile image"
          style={{ borderRadius: '16px' }}
        />
      )}
    </S.BioWrapper>
  )
}

export default Bio
