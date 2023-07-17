import { Post } from '@/interfaces';

const posts: Post[] = [
  {
    slug: 'how-to-catch-chatgpt-lying',
    title: 'How to catch ChatGPT lying',
    description: 'Description...',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    slug: 'how-to-catch-chatgpt-lying-1',
    title: 'How to catch ChatGPT lying',
    description: 'Description...',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const getPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return posts;
};
