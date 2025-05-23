import { useMemo } from 'react';
import { Frontmatter, MarkdownRemark } from 'types';
import PostItem from './PostItem';
import * as S from './styles';

interface PostsProps {
  posts: MarkdownRemark<Frontmatter>[];
  category: string;
}
const AllPosts = ({ posts, category }: PostsProps) => {
  const filterdPosts = useMemo(
    () =>
      posts.filter((post) => {
        const categoryArr = post.frontmatter.categories.split(' ');
        return category === 'All' || categoryArr.includes(category);
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
