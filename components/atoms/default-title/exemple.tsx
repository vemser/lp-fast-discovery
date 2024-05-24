import { HTMLAttributes } from 'react';

export type DefaultHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
};

export default function DefaultHeading({
  variant = 'primary',
  children,
  ...rest
}: DefaultHeadingProps) {
  return (
    <>
      {variant === 'primary' && (
        <h1
          className="text-3xl font-bold
         text-brand-main
         transition-all duration-300
         hover:text-brand-dark
         active:text-brand-darker
         disabled:text-brand-light
         focus:outline-none focus:text-brand-dark
         "
          {...rest}
        >
          {children}
        </h1>
      )}

      {variant === 'secondary' && (
        <h1
          className="text-3xl font-bold
         text-brand-secondary
         transition-all duration-300
         hover:text-brand-secondary-dark
         active:text-brand-secondary-darker
         disabled:text-brand-secondary-light
         focus:outline-none focus:text-brand-secondary-dark
         "
          {...rest}
        >
          {children}
        </h1>
      )}

      {variant === 'tertiary' && (
        <h1
          className="text-3xl font-bold
         text-brand-tertiary
         transition-all duration-300
         hover:text-brand-tertiary-dark
         active:text-brand-tertiary-darker
         disabled:text-brand-tertiary-light
         focus:outline-none focus:text-brand-tertiary-dark
         "
          {...rest}
        >
          {children}
        </h1>
      )}
    </>
  );
}
