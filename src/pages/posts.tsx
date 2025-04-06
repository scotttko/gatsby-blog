import styled from '@emotion/styled';
import AllPosts from 'components/all-posts';
import Categories from 'components/categories';
import Seo from 'components/seo';
import { graphql } from 'gatsby';
import { useMemo } from 'react';
import useCategory from 'hooks/useCategory';
import { MOBILE_MEDIA_QUERY } from 'styles/theme';
import { Frontmatter, MarkdownRemark, SiteMetadata } from 'types';

interface PostsProps {
  data: {
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: { nodes: MarkdownRemark<Frontmatter>[] };
  };
}

const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 36px 0;
`;

const PostTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.25px;
  margin-bottom: 12px;
  padding: 0 16px;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 36px;
  }
`;

const Posts = ({ data }: PostsProps) => {
  const posts = data.allMarkdownRemark.nodes;
  const categories = useMemo(() => {
    const categorySet = new Set(['All']);
    posts.forEach((post) => {
      const categoryArr = post.frontmatter.categories.split(' ');
      categoryArr.forEach((category) => categorySet.add(category));
    });

    return [...categorySet];
  }, [posts]);

  const { category, switchCategory } = useCategory();

  return (
    <PostsWrapper>
      <PostTitle>Posts</PostTitle>
      <Categories categories={categories} category={category} switchCategory={switchCategory} />
      <AllPosts posts={posts} category={category} />
    </PostsWrapper>
  );
};

export default Posts;

export const Head = () => <Seo title="Posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { categories: { nin: [null, "test"] } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(height: 160, placeholder: BLURRED)
            }
          }
          categories
        }
      }
    }
  }
`;
