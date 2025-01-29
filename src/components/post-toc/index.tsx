import useTocIntersection from 'hooks/useTocIntersection';
import * as S from './styles';

interface PostTocProps {
  content: string;
}

const TOC_ID = 'toc';

const PostToc = ({ content }: PostTocProps) => {
  useTocIntersection({ id: TOC_ID });

  return (
    <S.PostTocWrapper>
      <S.TocCard>
        <S.TocTitle>Table of Contents</S.TocTitle>
        <S.TocContainer className={TOC_ID} dangerouslySetInnerHTML={{ __html: content }} />
      </S.TocCard>
    </S.PostTocWrapper>
  );
};

export default PostToc;
