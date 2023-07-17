import Link from 'next/link';
import { ReactNode } from 'react';

import { Spinner } from '../Spinner';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  loading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  onClick = () => ({}),
  type = 'button',
  loading = false,
  className = '',
  children,
  href,
}: ButtonProps) => {
  const classString = `
    focus:ring-opacity/80
    w-full
    h-12
    flex
    justify-center
    items-center
    rounded-md
    bg-indigo-700
    shadow-2xl
    shadow-[#4338ca90]
    px-6
    py-2.5
    text-sm
    font-medium
    tracking-wider
    text-white
    transition-colors
    duration-300
    hover:bg-indigo-800
    focus:outline-none
    focus:ring
    focus:ring-gray-300
    flex
    justify-center
    ${className}
  `;

  if (href) {
    return (
      <Link className={classString} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classString} type={type} onClick={onClick}>
      {loading ? <Spinner /> : children}
    </button>
  );
};
