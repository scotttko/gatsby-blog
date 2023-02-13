import AllPosts from 'components/all-posts'
import Seo from 'components/seo'
import { graphql } from 'gatsby'
import Layout from 'layouts'
import { MarkdownRemark, SiteMetadata } from 'types/types'

interface PostsProps {
  data: {
    site: { siteMetadata: SiteMetadata }
    allMarkdownRemark: { nodes: MarkdownRemark[] }
  }
  location: Location
}

const Posts = ({ data, location }: PostsProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <AllPosts posts={posts} />
    </Layout>
  )
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
