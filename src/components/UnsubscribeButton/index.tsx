'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { Button } from '../Button';
import { unsubscribeUser } from '@/services/newsletter-api/functions';

type UnsubscribeButtonProps = {
  className?: string;
  children: ReactNode;
  userId: string;
};

export const UnsubscribeButton = ({
  className = '',
  children,
  userId,
}: UnsubscribeButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onUnsubscribe = async () => {
    setLoading(true);
    await unsubscribeUser({ userId });
    console.log('vai push');
    router.push(`/cancelar/${userId}/sucesso`);
    setLoading(false);
  };

  return (
    <Button className={className} loading={loading} onClick={onUnsubscribe}>
      {children}
    </Button>
  );
};
