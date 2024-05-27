import { HTMLAttributes } from "react";
import Link from "next/link";

export type TextButtonProp = HTMLAttributes<HTMLDivElement> & {
  href: string;
  children: React.ReactNode;
};

export default function DefaultTextMenu({
  children,
  href,
  ...rest
}: TextButtonProp) {
  return (
    <>
      <Link href={href}>
        <div
          className="
      inline-block
      text-white text-lg font-medium px-1.5 py-1
      hover:border hover:border-white hover:rounded-2xl
      active:text-gray-300 hover:border-gray-300 hover:rounded-2xl
      disabled:text-gray-400 disabled:cursor-not-allowed      
      transition-all duration-300
      "
          {...rest}
        >
          {children}
        </div>
      </Link>
    </>
  );
}
