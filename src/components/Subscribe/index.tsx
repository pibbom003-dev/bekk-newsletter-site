import Image from 'next/image';

import logoImg from '../../assets/images/logo.png';
import { Link } from '../Link';
import { SubscribeForm } from '../SubscribeForm';

type SubscribeProps = {
  showReadFirstButton?: boolean;
};

export const Subscribe = ({ showReadFirstButton = true }: SubscribeProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      <Image src={logoImg} width={96} height={96} alt="Logo gatinho" />
      <h1 className="mt-4 text-center text-2xl md:text-3xl">
        Newsletter de Inteligência Artificial.
      </h1>
      <p className="mt-2 max-w-xl text-center text-gray-700">
        Para quem não tem tempo de ler notícias.
      </p>

      <SubscribeForm className="mt-4" />

      {showReadFirstButton && (
        <Link href="/" className="mt-4">
          Deixe-me ler primeiro
        </Link>
      )}
    </div>
  );
};
