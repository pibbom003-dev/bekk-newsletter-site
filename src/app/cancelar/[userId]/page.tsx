import { Metadata } from 'next';
import Image from 'next/image';

import logoImg from '../../../assets/images/logo.png';
import { UnsubscribeButton } from '@/components/UnsubscribeButton';
import { SITE_URL } from '@/constants/url.constants';

type GenerateMetadataProps = {
  params: { userId: string };
};

type UnsubscribeProps = {
  params: { userId: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { userId } = params;

  return {
    title: 'Cancelar inscrição da Newsletter',
    alternates: {
      canonical: `${SITE_URL}/cancelar/${userId}`,
    },
  };
}

export default function Unsubscribe({ params }: UnsubscribeProps) {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between">
        <Image src={logoImg} width={96} height={96} alt="Logo gatinho" />

        <h1 className="mt-4 text-3xl">Cancelar inscrição</h1>

        <p className="mt-2 max-w-xl text-center text-gray-700">
          Tem certeza de que deseja cancelar a inscrição?
        </p>

        <UnsubscribeButton userId={params.userId} className="mt-4">
          Cancelar inscrição
        </UnsubscribeButton>
      </div>
    </main>
  );
}
