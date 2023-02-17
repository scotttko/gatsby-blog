import AllPosts from 'components/all-posts'
import Seo from 'components/seo'
import { graphql } from 'gatsby'
import { MarkdownRemark, SiteMetadata } from 'types'

interface PostsProps {
  data: {
    site: { siteMetadata: SiteMetadata }
    allMarkdownRemark: { nodes: MarkdownRemark[] }
  }
}

const Posts = ({ data }: PostsProps) => {
  const posts = data.allMarkdownRemark.nodes

  return <AllPosts posts={posts} />
}

export default Posts

export const Head = () => <Seo title="Posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "resume" } } }
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
        }
      }
    }
  }
`
