import styled from '@emotion/styled';
import ProjectList from 'components/project/ProjectList';
import Seo from 'components/seo';
import { graphql } from 'gatsby';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';
import { MarkdownRemark, ProjectFrontmatter, SiteMetadata } from 'types';

interface PostsProps {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: { nodes: MarkdownRemark<ProjectFrontmatter>[] };
  };
}

const PROJECT_CATEGORY_ORDER = ['Lightscale', 'Santa', 'Personal'];

const Projects = ({ data }: PostsProps) => {
  const projects = data.allMarkdownRemark.nodes;

  const categorizedProjects = projects.reduce<Record<string, MarkdownRemark<ProjectFrontmatter>[]>>(
    (acc, project) => {
      const category = project.frontmatter.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(project);
      return acc;
    },
    {}
  );

  return (
    <ProjectContainer>
      <ProjecetTitle>Projects</ProjecetTitle>
      <ProjectWrapper>
        {Object.entries(categorizedProjects)
          .sort(([a], [b]) => PROJECT_CATEGORY_ORDER.indexOf(a) - PROJECT_CATEGORY_ORDER.indexOf(b))
          .map(([category, items]) => (
            <ProjectList key={category} title={category} projects={items} />
          ))}
      </ProjectWrapper>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px 0;
`;

const ProjecetTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 24px;
  padding: 0 16px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 36px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 0 16px;
`;

export default Projects;

export const Head = () => <Seo title="Projects" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          period
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(height: 200, placeholder: BLURRED)
            }
          }
          category
          status
          tech
        }
      }
    }
  }
`;
