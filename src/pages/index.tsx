import { graphql } from 'gatsby'
import Seo from 'components/seo'
import { MarkdownRemark, SiteMetadata } from 'types'
import Bio from 'components/bio'
import RecentPosts from 'components/recent-posts'
import { motion } from 'framer-motion'
import { staggerSlowVariants } from 'utils/animations'

interface BlogIndexProps {
  data: {
    site: { siteMetadata: SiteMetadata }
    allMarkdownRemark: { nodes: MarkdownRemark[] }
  }
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <motion.div variants={staggerSlowVariants} initial="hidden" animate="visible">
      <Bio title={siteTitle} />
      {posts.length > 0 ? <RecentPosts posts={posts} /> : <p>No recent posts</p>}
    </motion.div>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

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
      limit: 4
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
