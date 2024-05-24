
import { HTMLAttributes } from "react";


export type DefaultText = HTMLAttributes<HTMLDivElement> & {
    variant?: 'dark' | 'light',
    children: React.ReactNode;
}

export default function DefaultTextGeral({
    variant = 'light',
    children,
    ...rest
}: DefaultText) {
    return(
        <>
       {variant === 'dark' && (
        <div className="text-custom-base text-brand-darker">{children}</div>
       )}

       {variant === 'light' && (
        <div className="text-custom-base text-white">{children}</div>
       )}
        </>
    )
}
