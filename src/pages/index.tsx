import { graphql } from 'gatsby';
import Seo from 'components/seo';
import { Image, MarkdownRemark, SiteMetadata } from 'types';
import Bio from 'components/bio';
import RecentPosts from 'components/recent-posts';

interface BlogIndexProps {
  data: {
    image: Image;
    site: { siteMetadata: SiteMetadata };
    allMarkdownRemark: { nodes: MarkdownRemark[] };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const metaData = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.nodes;
  const img = data.image;

  return (
    <div>
      <Bio data={{ metaData, image: img }} />
      {posts.length > 0 ? <RecentPosts posts={posts} /> : <p>No recent posts</p>}
    </div>
  );
};

export default BlogIndex;

export const Head = () => <Seo title="Home" />;

export const pageQuery = graphql`
  {
    image: file(absolutePath: { regex: "/profile_image.jpeg/" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 160, height: 160, placeholder: BLURRED)
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          github
          email
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { nin: [null, "test"] } } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(height: 160, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
