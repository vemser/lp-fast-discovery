"use client"

import DefaultTitle from "@/components/atoms/default-title/DefaultTitle";
import DefaultTextGeral from "@/components/atoms/default-text/DefaultTextGeral";
import CardMaterials from "@/components/molecules/card-materials/CardMaterials";
//import Image from "next/image";

export default function MoreMaterialsSection() {
  return (
    <>
      <div className="min-h-screen bg-brand-darker p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex-1 min-w-0 max-w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.3333%-1rem)]">
            <div className="flex flex-col justify-start items-start max-w-full sm:max-w-xs md:max-w-[408px]">
             <DefaultTitle variant="tertiary">  
              <span className="block">Ficou </span>
              <span className="block">interessado?</span>                
              </DefaultTitle>             
             <div className="text-white py-8">Descubra os materiais da Fast Product Discovery para conhecer melhor nosso processo. E nos siga nas redes sociais para acompanhar as novidades!</div> 
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-start gap-4">
            <div className="flex-1 min-w-0 max-w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.3333%-1rem)]">
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
