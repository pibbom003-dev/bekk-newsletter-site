'use client';

import { usePathname } from 'next/navigation';

import { Container } from '../Container';
import { Link } from '../Link';

type BreadcrumbProps = {
  className?: string;
};

const pathNamesMap: { [key: string]: { href: string; text: string } } = {
  posts: {
    href: '/posts',
    text: 'Posts',
  },
  '': {
    href: '/',
    text: 'Home',
  },
};

export const Breadcrumb = ({ className = '' }: BreadcrumbProps) => {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <nav aria-label="breadcrumb" className={className}>
      <Container className="px-4">
        <ol className="flex">
          {paths.map((path, index) => (
            <li key={path}>
              <Link
                className={index === paths.length - 1 ? 'text-blue-500' : ''}
                href={pathNamesMap[path]?.href || '#'}
              >
                {pathNamesMap[path]?.text || path}
              </Link>
              {index !== paths.length - 1 && <span className="mx-2">/</span>}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
};
