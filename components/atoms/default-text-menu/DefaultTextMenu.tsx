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
          className="rounded-2xl inline-block px-3 py-1 text-lg font-medium text-white hover:outline hover:outline-1 hover:outline-white active:text-gray-300 disabled:cursor-not-allowed disabled:text-gray-400"
          {...rest}
        >
          {children}
        </div>
      </Link>
    </>
  );
}
