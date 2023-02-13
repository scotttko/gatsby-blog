import { Link, graphql } from 'gatsby'
import Layout from 'layouts'

import { Fields, Frontmatter, MarkdownRemark, SiteMetadata } from 'types/types'
import Bio from '../components/bio'
// import Layout from '../components/layout'
import Seo from '../components/seo'

interface BlogPostTemplateProps {
  data: {
    previous: { fields: Fields; frontmatter: Frontmatter } | null
    next: { fields: Fields; frontmatter: Frontmatter } | null
    site: { siteMetadata: SiteMetadata }
    markdownRemark: Omit<MarkdownRemark, 'fields'> & { html: string }
  }
  location: Location
}
const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: BlogPostTemplateProps) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio title={siteTitle} />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({
  data: { markdownRemark: post },
}: {
  data: { markdownRemark: MarkdownRemark }
}) => (
  <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
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
      }
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
`
