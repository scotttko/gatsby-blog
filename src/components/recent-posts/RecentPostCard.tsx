import { GatsbyImage } from 'gatsby-plugin-image';
import { MarkdownRemark } from 'types';
import { fadeUpVariants } from 'utils/animations';
import * as S from './styles';

interface RecentPostCardProps {
  post: MarkdownRemark;
}
const RecentPostCard = ({ post }: RecentPostCardProps) => {
  const title = post.frontmatter.title || post.fields.slug;
  const { thumbnail } = post.frontmatter;

  return (
    <S.RecentPostCard
      to={post.fields.slug}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      variants={fadeUpVariants}
    >
      {thumbnail ? (
        <GatsbyImage
          image={thumbnail.childImageSharp.gatsbyImageData}
          alt="thumbnail"
          style={{ borderRadius: '8px 8px 0 0', height: '160px' }}
        />
      ) : (
        <S.CardThumb>thumbnail</S.CardThumb>
      )}
      <S.CardContent>
        {title}
        <S.CardDate>{post.frontmatter.date}</S.CardDate>
      </S.CardContent>
    </S.RecentPostCard>
  );
};

export default RecentPostCard;
