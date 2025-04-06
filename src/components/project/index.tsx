import { MarkdownRemark, ProjectFrontmatter } from 'types';
import styled from '@emotion/styled';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';
import * as S from './styles';

interface ProjectProps {
  post: MarkdownRemark<ProjectFrontmatter>;
}
const Project = ({ post }: ProjectProps) => {
  const { title, period } = post.frontmatter;
  return (
    <S.ProjectWrapper>
      <ProjectHeader>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDate>{period}</ProjectDate>
      </ProjectHeader>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
    </S.ProjectWrapper>
  );
};

export default Project;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 8px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 28px;
  }
`;

const ProjectDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.palette.subTextColor};
`;
