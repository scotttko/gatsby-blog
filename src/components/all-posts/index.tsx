import { useMemo } from 'react'
import { MarkdownRemark } from 'types'
import PostItem from './PostItem'
import * as S from './styles'

interface PostsProps {
  posts: MarkdownRemark[]
  category: string
}
const AllPosts = ({ posts, category }: PostsProps) => {
  const filterdPosts = useMemo(
    () =>
      posts.filter(
        (post) => category === 'All' || post.frontmatter.categories.split(' ').includes(category)
      ),
    [posts, category]
  )
  return (
    <S.PostList>
      {filterdPosts.map((post) => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </S.PostList>
  )
}

export default AllPosts
