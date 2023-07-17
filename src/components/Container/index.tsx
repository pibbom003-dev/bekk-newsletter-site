import { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`container mx-auto my-0 ${className}`}>{children}</div>
  );
};
