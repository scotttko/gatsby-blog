import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from 'components/seo'
import Post from 'components/post'
import PostNav from 'components/post-nav'

import { MarkdownRemark, SiteMetadata } from 'types'
import Utterances from 'components/utterances'

interface BlogPostTemplateProps {
  data: {
    previous: MarkdownRemark
    next: MarkdownRemark
    site: { siteMetadata: SiteMetadata }
    markdownRemark: MarkdownRemark
  }
  // location: Location
}
const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
}: BlogPostTemplateProps) => {
  const utterancesRepo = site.siteMetadata?.utterances.repo

  return (
    <>
      <Post post={post} />
      {(previous || next) && <PostNav prev={previous} next={next} />}

      {utterancesRepo && <Utterances repo={utterancesRepo} />}
    </>
  )
}

export const Head = ({
  data: { markdownRemark: post },
}: {
  data: { markdownRemark: MarkdownRemark }
}) => {
  const { title, description, thumbnail } = post.frontmatter
  const thumbnailSrc = thumbnail.childImageSharp.gatsbyImageData.images.fallback?.src
  return <Seo title={title} description={description || post.excerpt} image={thumbnailSrc} />
}

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
        thumbnail {
          childImageSharp {
            gatsbyImageData(height: 630)
          }
        }
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
