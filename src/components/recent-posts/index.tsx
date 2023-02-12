import { FiChevronRight } from 'react-icons/fi'
import { MarkdownRemark } from 'types/types'
import RecentPostCard from './RecentPostCard'
import * as S from './styles'

interface RecentPostsProps {
  posts: MarkdownRemark[]
}
const RecentPosts = ({ posts }: RecentPostsProps) => (
  <S.RecentPostsWrapper>
    <S.Title>Recent Posts</S.Title>
    <S.RecentPostContainer>
      {posts.map((post) => (
        <RecentPostCard key={post.fields.slug} post={post} />
      ))}
    </S.RecentPostContainer>
    <S.PostLink to="/posts">
      Read all posts
      <FiChevronRight />
    </S.PostLink>
  </S.RecentPostsWrapper>
)

export default RecentPosts
