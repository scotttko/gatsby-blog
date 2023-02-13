import About from 'components/about'
import Seo from 'components/seo'
import { graphql } from 'gatsby'
import Layout from 'layouts'
import { MarkdownRemark, SiteMetadata } from 'types/types'

interface AboutPageProps {
  data: {
    site: { siteMetadata: SiteMetadata }
    allMarkdownRemark: { nodes: MarkdownRemark[] }
  }
  location: Location
}

const AboutPage = ({ data, location }: AboutPageProps) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const resume = data.allMarkdownRemark.nodes[0].html

  return (
    <Layout location={location} title={siteTitle}>
      <About resume={resume} />
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "resume" } } }) {
      nodes {
        excerpt(pruneLength: 200)
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`
