'use client';

import { Button } from '../Button';
import { Link } from '../Link';

export const Header = () => {
  return (
    <header
      className="
        body-font
        w-full
        border-t
        border-gray-100
        bg-white
        px-6
        text-gray-700
        shadow-sm
      "
    >
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link href="/">Bekk</Link>

        <nav
          className="
            ml-6
            flex
            flex-wrap
            items-center
            justify-center
            border-l
            border-gray-200 pl-6 text-base md:mr-auto
          "
        />

        <Button href="/inscrever-se" className="my-1 text-center">
          Inscrever-se
        </Button>
      </div>
    </header>
  );
};
