import { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={clsx(
        'w-full bg-white text-black py-3 px-5 font-normal text-[16.8px]',
        'border border-gray-200 rounded-md',
        'appearance-none cursor-pointer',
        'bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")]',
        'bg-[length:1.5em_1.5em] bg-no-repeat bg-[right_0.75rem_center]',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}