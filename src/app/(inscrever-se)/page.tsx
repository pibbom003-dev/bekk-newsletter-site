import { Subscribe as SubscribeComponent } from '@/components/Subscribe';
import { SITE_URL } from '@/constants/url.constants';

export const metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Subscribe() {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center p-4">
      <SubscribeComponent showReadFirstButton={false} />
    </main>
  );
}
