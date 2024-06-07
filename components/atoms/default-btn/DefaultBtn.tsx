import { cn } from '@/utils/tailwindMerge';
import { ButtonHTMLAttributes } from 'react';

export type DefaultBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'text-button';
  className?: string;
  children: React.ReactNode;
};

export default function DefaultBtn({
  variant = 'primary',
  className,
  children,
  ...rest
}: DefaultBtnProps) {
  return (
    <>
      {variant === 'primary' && (
        <button
          className={cn(
            'py-4 px-5 text-base font-normal bg-brand-main text-white h-[3rem] min-w-[11.75rem] flex items-center justify-center transition-all duration-300hover:bg-brand-dark hover:rounded-lg hover:bg-brand-dark active:bg-brand-darker active:rounded-lg disabled:bg-brand-light disabled:cursor-not-allowed disabled:rounded-none disabled:text-gray-light focus:outline-2 focus:outline-brand-dark',
            className
          )}
          {...rest}
        >
          {children}
        </button>
      )}

      {variant === 'secondary' && (
        <button
          className={cn(
            'py-4 px-5 text-base font-normal bg-white text-brand-darker h-[3rem] min-w-[11.75rem] flex items-center justify-center duration-300 hover:bg-gray-light hover:rounded-lg active:bg-gray-darker active:rounded-lg active:text-white disabled:bg-gray-dark disabled:cursor-not-allowed disabled:rounded-none disabled:text-gray-main  focus:outline-2 focus:outline-brand-darker focus:bg-white',
            className
          )}
          {...rest}
        >
          {children}
        </button>
      )}

      {variant === 'text-button' && (
        <button
          className={cn(
            'py-3 px-5 font-normal text-brand-main flex items-center justify-center gap-2 duration-300 hover:text-gray-light active:text-brand-darker disabled:text-brand-light disabled:cursor-not-allowed disabled:opacity-75 focus:border-1 focus:border-brand-dark',
            className
          )}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
}
