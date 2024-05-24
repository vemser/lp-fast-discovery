import { HTMLAttributes } from "react";

export type DefaultHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    variant?: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
}

export default function DefaultTitle({
    variant = 'primary',
    children,
    ...rest
}: DefaultHeadingProps) {
    return(
        <>
       {variant === 'primary' && (
        <h1 className="text-4xl font-custom-500 text-brand-darker leading-68" {...rest}>{children}</h1>
       )}

        {variant === 'secondary' && (
        <h1 className="text-4xl font-custom-500 text-blue-dbc-bg leading-68" {...rest}>{children}</h1>
       )}

        {variant === 'tertiary' && (
        <h1 className="text-4xl font-custom-500 text-white leading-68" {...rest}>{children}</h1>
       )}
        </>
    )
}
