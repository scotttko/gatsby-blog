import { MarkdownRemark } from 'types/types'
import PostItem from './PostItem'
import * as S from './styles'

interface PostsProps {
  posts: MarkdownRemark[]
}
const AllPosts = ({ posts }: PostsProps) => (
  <S.PostsWrapper>
    <S.Title>Posts</S.Title>
    <S.PostList>
      {posts.map((post) => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </S.PostList>
  </S.PostsWrapper>
)

export default AllPosts
