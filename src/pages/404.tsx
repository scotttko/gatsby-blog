import { graphql } from 'gatsby'

import Layout from 'layouts'
import Seo from 'components/seo'
import { SiteMetadata } from 'types'
import NotFound from 'components/not-found'

interface NotFoundPageProps {
  data: {
    site: { siteMetadata: SiteMetadata }
  }
  location: Location
}

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <NotFound />
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
