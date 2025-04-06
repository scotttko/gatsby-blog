import { FiChevronRight } from 'react-icons/fi';
import { Frontmatter, MarkdownRemark } from 'types';
import { fadeInVariants, staggerVariants } from 'utils/animations';
import RecentPostCard from './RecentPostCard';
import * as S from './styles';

interface RecentPostsProps {
  posts: MarkdownRemark<Frontmatter>[];
}
const RecentPosts = ({ posts }: RecentPostsProps) => (
  <S.RecentPostsWrapper variants={fadeInVariants}>
    <S.Title>Recent Posts</S.Title>
    <S.RecentPostContainer variants={staggerVariants}>
      {posts.map((post) => (
        <RecentPostCard key={post.fields.slug} post={post} />
      ))}
    </S.RecentPostContainer>
    <S.PostLink to="/posts">
      Read all posts
      <FiChevronRight />
    </S.PostLink>
  </S.RecentPostsWrapper>
);

export default RecentPosts;
