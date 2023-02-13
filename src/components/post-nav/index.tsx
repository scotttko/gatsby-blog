import { MarkdownRemark } from 'types'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import * as S from './styles'

interface PostNavProps {
  prev: MarkdownRemark
  next: MarkdownRemark
}
const PostNav = ({ prev, next }: PostNavProps) => (
  <S.PostNavWrapper>
    {prev && (
      <S.PostNavLink to={prev.fields.slug} rel="prev" dir="prev">
        <IoMdArrowRoundBack style={{ marginRight: '4px' }} /> {prev.frontmatter.title}
      </S.PostNavLink>
    )}
    {next && (
      <S.PostNavLink to={next.fields.slug} rel="next" dir="next">
        {next.frontmatter.title} <IoMdArrowRoundForward style={{ marginLeft: '4px' }} />
      </S.PostNavLink>
    )}
  </S.PostNavWrapper>
)

export default PostNav
