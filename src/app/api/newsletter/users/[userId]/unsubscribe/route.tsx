import { NextRequest } from 'next/server';

import { NEWSLETTER_API_URL } from '@/constants/url.constants';

export async function PATCH(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const userId = pathname.split('/')[4];

  await fetch(`${NEWSLETTER_API_URL}/users/${userId}/unsubscribe`, {
    method: 'PATCH',
  });

  return new Response(null, { status: 204 });
}
