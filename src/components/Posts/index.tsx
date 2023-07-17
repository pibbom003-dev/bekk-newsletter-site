import NextLink from 'next/link';

import { Post } from '@/interfaces';

type PostsProps = {
  posts: Post[];
};

export const Posts = ({ posts = [] }: PostsProps) => {
  return (
    <>
      {posts.map((post) => (
        <NextLink
          className="flex flex-col py-6 hover:bg-gray-50 md:flex-row"
          href={`/posts/${post.slug}`}
          key={post.slug}
        >
          <div className="h-[14rem] w-full rounded-md bg-gray-600 md:w-[26rem]"></div>
          <div className="mt-4 md:ml-6 md:mt-0">
            <h2 className="text-xl font-bold">How to catch ChatGPT lying</h2>
            <p>Description...</p>
          </div>
        </NextLink>
      ))}
    </>
  );
};
