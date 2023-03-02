/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description?: string
  title: string
  image?: string
  children?: React.ReactNode
}
const Seo = ({ description, title, image, children }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            ogImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const { siteUrl, ogImage } = site.siteMetadata

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image ? `${siteUrl}${image}` : ogImage} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:type" content="website" />

      <meta name="google-site-verification" content="AJ6jBaXPCGTb8rxfZRBcrLBXOZNicPSC5gY1JxZ-d8Y" />
      {children}
    </>
  )
}

export default Seo
