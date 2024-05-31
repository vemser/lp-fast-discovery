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
    <div className="max-w-[327px] md:max-w-[409px] bg-white shadow-card-shadow rounded-lg p-4 flex flex-col items-start">
      <div className="ml-4">
    <Image src={icon} alt={alt} width={48} height={48} className="mb-2 pt-6" />
    <h2 className="text-lg font-semibold mb-2 py-16 pb-0">{title}</h2> 
    <p className="text-gray-dark">{children}</p>
    </div>    
  </div>
  );
}
