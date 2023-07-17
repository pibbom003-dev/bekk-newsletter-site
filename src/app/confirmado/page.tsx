import Image from 'next/image';

import logoImg from '../../assets/images/logo.png';
import { SITE_URL } from '@/constants/url.constants';

export const metadata = {
  title: 'Confirmação de inscrição na Newsletter',
  alternates: {
    canonical: `${SITE_URL}/confirmado`,
  },
};

export default function Confirm() {
  return (
    <main className="flex h-[80vh] flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-between">
        <Image src={logoImg} width={96} height={96} alt="Logo gatinho" />
        <h1 className="mt-4 text-3xl">Inscrição confirmada!</h1>
        <p className="mt-2 max-w-xl text-center text-gray-700">
          Logo você receberá a sua primeira edição da Newsletter! 🎉
        </p>
      </div>
    </main>
  );
}
