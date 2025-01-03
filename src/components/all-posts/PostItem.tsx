import { MarkdownRemark } from 'types';
import { fadeUpVariants } from 'utils/animations';
import * as S from './styles';

interface PostItemProps {
  post: MarkdownRemark;
}
const PostItem = ({ post }: PostItemProps) => {
  const title = post.frontmatter.title || post.fields.slug;
  const categories = post.frontmatter.categories.split(' ');

  return (
    <S.PostItemContainer
      to={post.fields.slug}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ amount: 0.5, once: true }}
    >
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDesc>{post.frontmatter.description || post.excerpt}</S.PostItemDesc>
      <S.PostItemInfo>
        {categories.map((category) => (
          <S.PostItemCategory key={category}>{category}</S.PostItemCategory>
        ))}
        <S.PostItemDate>{post.frontmatter.date}</S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemContainer>
  );
};

export default PostItem;
