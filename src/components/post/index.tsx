import { MarkdownRemark } from 'types'
import PostHeader from './PostHeader'
import * as S from './styles'

interface PostProps {
  post: MarkdownRemark
}
const Post = ({ post }: PostProps) => {
  const postTitle = post.frontmatter.title
  const postDate = post.frontmatter.date

  return (
    <S.PostWrapper>
      <PostHeader title={postTitle} date={postDate} />
      <section className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
    </S.PostWrapper>
  )
}

export default Post
