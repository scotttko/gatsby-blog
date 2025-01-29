import { useMemo } from 'react';
import { MarkdownRemark } from 'types';
import PostItem from './PostItem';
import * as S from './styles';

interface PostsProps {
  posts: MarkdownRemark[];
  category: string;
}
const AllPosts = ({ posts, category }: PostsProps) => {
  const filterdPosts = useMemo(
    () =>
      posts.filter((post) => {
        const categoryArr = post.frontmatter.categories.split(' ');

        return (
          (category === 'All' || categoryArr.includes(category)) && !categoryArr.includes('test')
        );
      }),
    [posts, category]
  );

  return (
    <S.PostList>
      {filterdPosts.map((post) => (
        <PostItem key={post.fields.slug} post={post} />
      ))}
    </S.PostList>
  );
};

export default AllPosts;
