import { RequestInit } from 'next/dist/server/web/spec-extension/request';

import { SITE_URL } from '@/constants/url.constants';

const API_URL = `${SITE_URL}/api/newsletter`;

export const api = {
  get: (path: string, options?: RequestInit) =>
    fetch(`${API_URL}${path}`, { method: 'GET', ...(options || {}) }).then(
      (response) => response.json(),
    ),

  post: (path: string, body: unknown, options?: RequestInit) =>
    fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...(options || {}),
    }),

  patch: (path: string, options?: RequestInit) =>
    fetch(`${API_URL}${path}`, { method: 'PATCH', ...(options || {}) }),
};
