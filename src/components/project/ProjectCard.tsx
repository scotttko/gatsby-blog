import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';
import { MarkdownRemark, ProjectFrontmatter } from 'types';

interface ProjectCardProps {
  project: MarkdownRemark<ProjectFrontmatter>;
}

function ProjectCard({ project }: ProjectCardProps) {
  const title = project.frontmatter.title || project.fields.slug;
  const { description, status, period, tech } = project.frontmatter;
  const { thumbnail } = project.frontmatter;
  const isDisabled = status === 'WIP';
  const tecList = tech ? tech.split(' ').slice(0, 3) : [];

  return (
    <ProjectCardContainer
      to={isDisabled ? '#' : project.fields.slug}
      {...(status !== 'WIP' && {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
      })}
      aria-disabled={isDisabled}
    >
      {thumbnail && (
        <ImageWrapper>
          <ThumbnailImage
            image={thumbnail.childImageSharp.gatsbyImageData}
            alt="thumbnail"
            // style={{ borderRadius: '20px', height: '200px' }}
          />
          {isDisabled && <WipWrapper>WIP</WipWrapper>}
        </ImageWrapper>
      )}
      <ContentWrapper>
        {tecList && tecList.length > 0 && (
          <TechList>
            {tecList.map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </TechList>
        )}
        <ProjectTitle>{title}</ProjectTitle>
        {description && <ProjectDesc>{description}</ProjectDesc>}
        {period && <ProjectPeriod>{period}</ProjectPeriod>}
      </ContentWrapper>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

const ProjectCardContainer = styled(motion(Link))`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  padding: 16px;
  border-radius: 16px;
  border: 1.5px solid transparent;

  &[aria-disabled='true'] {
    pointer-events: none;
    cursor: default;
  }

  &[aria-disabled='false'] {
    &:hover {
      background-color: ${({ theme }) => theme.palette.buttonBgColor};
      border: 1.5px solid ${({ theme }) => theme.palette.mainTextColor};
    }
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  aspect-ratio: 300/200;
  border-radius: 20px;
  object-fit: cover;
`;

const WipWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: 100%;
`;

const TechList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const TechBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.badgeBgColor};
  font-size: 12px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
    padding: 4px;
  }
`;

const ProjectTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.mainTextColor};
  margin: 10px 0 6px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 16px;
    line-height: 18px;
    margin: 8px 0 4px;
  }
`;

const ProjectDesc = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.subTextColor};
  overflow: hidden;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 12px;
  }
`;

const ProjectPeriod = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.subTextColor};
  margin-top: auto;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 10px;
  }
`;
