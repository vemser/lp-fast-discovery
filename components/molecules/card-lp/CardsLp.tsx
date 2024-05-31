import DefaultTextGeral from "@/components/atoms/default-text/DefaultTextGeral";
import Image from "next/image";
import React from "react";

interface CardLpProps {
  icon: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}

export default function CardsLp({ icon, alt, title, children }: CardLpProps) {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg p-4 flex flex-col items-start md:w-[410px] md:h-[260px]">
      <div className="ml-4">
        <Image
          src={icon}
          alt={alt}
          width={48}
          height={48}
          className="mb-2 pt-6"
        />
        <h2 className="text-lg font-semibold mb-2 py-16 pb-0">{title}</h2>
        <DefaultTextGeral variant="dark">{children}</DefaultTextGeral>
      </div>
    </div>
  );
}
