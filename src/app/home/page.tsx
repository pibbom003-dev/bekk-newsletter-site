import { Container } from '@/components/Container';
import { Posts } from '@/components/Posts';
import { Subscribe } from '@/components/Subscribe';
import { getPosts } from '@/services/newsletter-api/functions';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Container className="flex justify-center px-8 py-24">
        <Subscribe showReadFirstButton={false} />
      </Container>

      <div className="flex bg-white">
        <Container className="flex flex-col gap-8 px-4 py-16 md:flex-row">
          <div className="flex flex-1 flex-col">
            <Posts posts={posts} />
          </div>

          <div className="w-full md:w-[16rem]"></div>
        </Container>
      </div>
    </main>
  );
}
