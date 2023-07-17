import { NEWSLETTER_API_URL } from '@/constants/url.constants';

export async function GET() {
  const response = await fetch(`${NEWSLETTER_API_URL}/users/count`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = JSON.stringify(await response.json());

  return new Response(data);
}
