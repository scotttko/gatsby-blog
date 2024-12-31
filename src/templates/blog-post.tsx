import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from 'components/seo';
import Post from 'components/post';
import PostNav from 'components/post-nav';
import { motion } from 'framer-motion';

import { MarkdownRemark, SiteMetadata } from 'types';
import Utterances from 'components/utterances';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fadeUpVariants } from 'utils/animations';

interface BlogPostTemplateProps {
  data: {
    previous: MarkdownRemark;
    next: MarkdownRemark;
    site: { siteMetadata: SiteMetadata };
    markdownRemark: MarkdownRemark;
  };
  // location: Location
}

const PostContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
}: BlogPostTemplateProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const utterancesRepo = site.siteMetadata?.utterances.repo;

  if (!isHydrated) {
    return null;
  }

  return (
    <PostContainer variants={fadeUpVariants} initial="hidden" whileInView="visible" exit="exit">
      {typeof window !== 'undefined' && <Post post={post} />}
      {(previous || next) && <PostNav prev={previous} next={next} />}

      {utterancesRepo && <Utterances repo={utterancesRepo} />}
    </PostContainer>
  );
};

export const Head = ({
  data: { markdownRemark: post },
}: {
  data: { markdownRemark: MarkdownRemark };
}) => {
  const { title, description, thumbnail } = post.frontmatter;
  const thumbnailSrc = thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src;
  return <Seo title={title} description={description || post.excerpt} image={thumbnailSrc} />;
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(height: 630)
          }
        }
      }
      tableOfContents(maxDepth: 3)
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
