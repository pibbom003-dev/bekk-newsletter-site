import { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
