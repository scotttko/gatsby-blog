import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from 'components/seo';
import { motion } from 'framer-motion';
import { MarkdownRemark, ProjectFrontmatter, SiteMetadata } from 'types';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fadeUpVariants } from 'utils/animations';
import Project from 'components/project';

interface ProjectPostTemplateProps {
  data: {
    site: { siteMetadata: SiteMetadata };
    markdownRemark: MarkdownRemark<ProjectFrontmatter>;
  };
  // location: Location
}

const ProjectPostTemplate = ({ data: { markdownRemark: post } }: ProjectPostTemplateProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <PostContainer variants={fadeUpVariants} initial="hidden" whileInView="visible" exit="exit">
      {typeof window !== 'undefined' && <Project post={post} />}
    </PostContainer>
  );
};

export const Head = ({
  data: { markdownRemark: post },
}: {
  data: { markdownRemark: MarkdownRemark<ProjectFrontmatter> };
}) => {
  const { title, description, thumbnail } = post.frontmatter;
  const thumbnailSrc = thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src;
  return <Seo title={title} description={description || post.excerpt} image={thumbnailSrc} />;
};

export default ProjectPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        utterances {
          repo
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        period
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(height: 630)
          }
        }
        category
        status
        tech
      }
    }
  }
`;

const PostContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
