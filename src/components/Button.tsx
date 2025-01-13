import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, variant = 'secondary', className }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-5 py-3 rounded-full transition-colors font-normal text-[16.8px]',
        variant === 'primary' && 'bg-[#36b39a] hover:bg-[#2d9680] text-white',
        variant === 'secondary' && 'bg-transparent border border-white text-white hover:bg-white/10',
        className
      )}
    >
      {children}
    </button>
  );
}