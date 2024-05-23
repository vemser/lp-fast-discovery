import { ButtonHTMLAttributes } from 'react';

export type DefaultBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'text-button';
  children: React.ReactNode;
};

export default function DefaultBtn({
  variant = 'primary',
  children,
  ...rest
}: DefaultBtnProps) {
  return (
    <>
      {variant === 'primary' && (
        <button
          className="py-4 px-5 text-base font-normal
         bg-brand-main text-white h-[3rem] min-w-[11.75rem] 
         flex items-center justify-center transition-all duration-300
         hover:bg-brand-dark hover:rounded-lg
         active:bg-brand-darker active:rounded-lg
         disabled:bg-brand-light disabled:cursor-not-allowed disabled:rounded-none disabled:text-gray-light
         focus:outline-2 focus:outline-brand-dark
         "
          {...rest}
        >
          {children}
        </button>
      )}

      {variant === 'secondary' && (
        <button
          className="py-4 px-5 text-base font-normal bg-white
           text-brand-darker h-[3rem] min-w-[11.75rem] 
           flex items-center justify-center duration-300
           hover:bg-gray-light hover:rounded-lg
           active:bg-gray-darker active:rounded-lg active:text-white
           disabled:bg-gray-dark disabled:cursor-not-allowed disabled:rounded-none disabled:text-gray-main 
           focus:outline-2 focus:outline-brand-darker focus:bg-white
           "
          {...rest}
        >
          {children}
        </button>
      )}

      {variant === 'text-button' && (
        <button
          className="py-4 px-5 text-base font-normal text-brand-main
        flex items-center justify-center
        gap-2 duration-300
        hover:text-brand-dark
        active:text-brand-darker
        disabled:text-brand-light disabled:cursor-not-allowed disabled:opacity-75
        focus:border-1 focus:border-brand-dark
        "
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
}
