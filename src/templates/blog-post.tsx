import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from 'components/seo'
import Post from 'components/post'
import PostNav from 'components/post-nav'
import Layout from 'layouts'

import { MarkdownRemark, SiteMetadata } from 'types'
import Utterances from 'components/utterances'

interface BlogPostTemplateProps {
  data: {
    previous: MarkdownRemark
    next: MarkdownRemark
    site: { siteMetadata: SiteMetadata }
    markdownRemark: MarkdownRemark
  }
  location: Location
}
const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: BlogPostTemplateProps) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const utterancesRepo = site.siteMetadata?.utterances.repo

  return (
    <Layout location={location} title={siteTitle}>
      <>
        <Post post={post} />
        {(previous || next) && <PostNav prev={previous} next={next} />}

        {utterancesRepo && <Utterances repo={utterancesRepo} />}
      </>
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
