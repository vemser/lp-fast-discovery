import { ButtonHTMLAttributes } from "react";
import Link from 'next/link';

export type TextButtonProps = ButtonHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export default function DefaultTextMenu({
  children,
  href,
  ...rest
}: TextButtonProps) {
  return (
    <Link href={href} passHref>
      <a
        className="
          text-white text-lg font-medium px-2 py-1
          hover:border hover:border-white hover:rounded-2xl
          active:text-gray-300
          disabled:text-gray-400 disabled:cursor-not-allowed
          transition-all duration-300
        "
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
}
