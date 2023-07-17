import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Posts as PostsComponent } from '@/components/Posts';
import { getPosts } from '@/services/newsletter-api/functions';

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main>
      <Breadcrumb className="mt-4" />
      <Container className="px-4 py-8">
        <h1 className="text-3xl">Posts</h1>
      </Container>
      <div className="flex bg-white">
        <Container className="flex flex-col gap-8 px-4 py-16 md:flex-row">
          <div className="flex flex-1 flex-col">
            <PostsComponent posts={posts} />
          </div>

          <div className="w-full md:w-[16rem]"></div>
        </Container>
      </div>
    </main>
  );
}
