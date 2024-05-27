import Image from 'next/image';
import React from 'react';

interface CardLpProps {
  icon: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}

export default function CardsLp({ icon, alt, title, children }: CardLpProps) {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg p-4 md:w-[410px] md:h-[260px]">
      <div className="flex items-center mb-4">
        <Image src={icon} alt={alt} width={48} height={48} className="mr-2" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}
