'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';
import { upsertUser } from '@/services/newsletter-api/functions/upsert-user';

type SubscribeFormProps = {
  className?: string;
};

export const SubscribeForm = ({ className = '' }: SubscribeFormProps) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await upsertUser({ email });
    setLoading(false);
    router.push('/confirmado');
  };

  return (
    <form
      className={`flex w-full flex-col items-center  px-6 ${className}`}
      onSubmit={onSubmit}
    >
      <div className="w-full max-w-[22rem]">
        <div
          className="
            mb-4
            w-full
            overflow-hidden
            rounded-md
            border-[1px]
            border-gray-400
         "
        >
          <Input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu email"
            required={true}
            value={email}
            type="email"
            name="email"
            id="email"
          />
        </div>

        <Button type="submit" loading={loading}>
          Inscrever-se (Grátis)
        </Button>
      </div>
    </form>
  );
};
