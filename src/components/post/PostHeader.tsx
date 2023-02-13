import * as S from './styles'

interface PostHeaderProps {
  title: string
  date: string
}

const PostHeader = ({ title, date }: PostHeaderProps) => (
  <S.PostHeaderWrapper>
    <S.PostTitle>{title}</S.PostTitle>
    <S.PostDate>{date}</S.PostDate>
  </S.PostHeaderWrapper>
)

export default PostHeader
