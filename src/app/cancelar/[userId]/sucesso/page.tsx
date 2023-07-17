import { Metadata } from 'next';
import Image from 'next/image';

import logoImg from '../../../../assets/images/logo.png';
import { Link } from '@/components/Link';
import { SITE_URL } from '@/constants/url.constants';

type GenerateMetadataProps = {
  params: { userId: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { userId } = params;

  return {
    title: 'Inscrição da Newsletter cancelada',
    alternates: {
      canonical: `${SITE_URL}/cancelar/${userId}/sucesso`,
    },
  };
}

export default function Confirm() {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between">
        <Image src={logoImg} width={96} height={96} alt="Logo gatinho" />
        <h1 className="mt-4 text-3xl">Inscrição cancelada!</h1>

        <p className="mt-2 max-w-xl text-center text-gray-700">
          Sua inscrição foi cancelada com sucesso.
        </p>

        <Link href="/" className="mt-2">
          {'<--'} Voltar para tela de inscrição
        </Link>
      </div>
    </main>
  );
}
