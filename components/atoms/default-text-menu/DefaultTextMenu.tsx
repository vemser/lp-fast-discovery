import { ButtonHTMLAttributes } from "react";
//import Link from "next/link";

export type TextButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
    to: string;
    children: React.ReactNode;
};

export default function DefaultTextMenu({
    children,
    to,
    ...rest
}: TextButtonProp ){
    return(
        <>
        <button
       className="
      text-white text-lg font-medium px-2 py-1
      hover:border hover:border-white hover:rounded-2xl
      active:text-gray-300 hover:border-gray-300 hover:rounded-2xl
      disabled:text-gray-400 disabled:cursor-not-allowed      
      transition-all duration-300
      "
      {...rest}
    >
      {children}
      
    </button>
        </>
    )
}