import About from 'components/about'
import Seo from 'components/seo'
import { graphql } from 'gatsby'
import { MarkdownRemark, SiteMetadata } from 'types'

interface AboutPageProps {
  data: {
    site: { siteMetadata: SiteMetadata }
    allMarkdownRemark: { nodes: MarkdownRemark[] }
  }
}

const AboutPage = ({ data }: AboutPageProps) => {
  const resume = data.allMarkdownRemark.nodes[0].html

  return <About resume={resume} />
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
