import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { DEFAULT_META } from '@/constants/meta.constants';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = DEFAULT_META;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
