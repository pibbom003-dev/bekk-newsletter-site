import { NextRequest } from 'next/server';

import { NEWSLETTER_API_URL } from '@/constants/url.constants';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const response = await fetch(`${NEWSLETTER_API_URL}/users`, {
    body: JSON.stringify({ email }),
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to upsert user');
  }

  return new Response(null, { status: 204 });
}
