import NextLink from 'next/link';
import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export const Link = ({ href, className, children }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`
        text-gray-600
        transition-colors
        duration-300
        hover:text-indigo-700
        hover:underline
        dark:text-gray-300
        dark:hover:text-blue-400
        ${className}
      `}
    >
      {children}
    </NextLink>
  );
};
