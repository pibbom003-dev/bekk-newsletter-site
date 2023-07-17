'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`
        focus:ring-opacity/40
        h-12
        w-full
        rounded-md
        border
        bg-white
        px-4
        py-2
        text-gray-700
        focus:outline-none
        dark:border-gray-600
        dark:bg-gray-900
        dark:text-gray-300
        ${className}
      `}
    />
  );
};
