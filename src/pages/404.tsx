import Seo from 'components/seo';
import NotFound from 'components/not-found';

const NotFoundPage = () => <NotFound />;

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
