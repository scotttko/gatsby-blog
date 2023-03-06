import useTocIntersection, { getDecodedLink, tableOfContentsId } from 'hooks/useTocIntersection'
import { useEffect } from 'react'
import * as S from './styles'

interface PostTocProps {
  content: string
}

const PostToc = ({ content }: PostTocProps) => {
  const { activeId, anchorEl } = useTocIntersection()

  useEffect(() => {
    if (!anchorEl) return

    anchorEl.forEach((el) => {
      if (getDecodedLink(el.hash) === activeId) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
  }, [activeId, anchorEl])

  return (
    <S.PostTocWrapper>
      <S.TocCard>
        <S.TocTitle>Table of Contents</S.TocTitle>
        <S.TocContainer
          className={tableOfContentsId}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </S.TocCard>
    </S.PostTocWrapper>
  )
}

export default PostToc
