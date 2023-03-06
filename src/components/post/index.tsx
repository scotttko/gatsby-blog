import PostToc from 'components/post-toc'
import { useMediaQuery } from 'react-responsive'
import { MarkdownRemark } from 'types'
import PostHeader from './PostHeader'
import * as S from './styles'

interface PostProps {
  post: MarkdownRemark
}
const Post = ({ post }: PostProps) => {
  const showToc = useMediaQuery({ query: '(min-width: 1024px)' })

  const postTitle = post.frontmatter.title
  const postDate = post.frontmatter.date
  const toc = post.tableOfContents

  return (
    <S.PostWrapper>
      <PostHeader title={postTitle} date={postDate} />
      <S.PostContainer>
        <S.PostContent className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        {showToc && <PostToc content={toc} />}
      </S.PostContainer>
    </S.PostWrapper>
  )
}

export default Post
