import styled from '@emotion/styled';
import { MarkdownRemark, ProjectFrontmatter } from 'types';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';
import { parsePeriodEnd } from 'utils/date';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  title: string;
  projects: MarkdownRemark<ProjectFrontmatter>[];
}
function ProjectList({ title, projects }: ProjectListProps) {
  const sortedProjects = projects.sort((a, b) => {
    const aEnd = parsePeriodEnd(a.frontmatter?.period);
    const bEnd = parsePeriodEnd(b.frontmatter?.period);

    if (aEnd === 'Present' && bEnd !== 'Present') return -1;
    if (bEnd === 'Present' && aEnd !== 'Present') return 1;

    if (aEnd instanceof Date && bEnd instanceof Date) {
      return bEnd.getTime() - aEnd.getTime();
    }

    return 0;
  });

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListWrapper>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.fields.slug} project={project} />
        ))}
      </ListWrapper>
    </ListContainer>
  );
}

export default ProjectList;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${MOBILE_MEDIA_QUERY} {
    gap: 8px;
  }
`;

const ListTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.25px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 24px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 8px;

  @media ${MOBILE_MEDIA_QUERY} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 0;
  }
`;
