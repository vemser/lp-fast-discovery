import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  
    return(
        <>
        <footer className="bg-brand-main text-white flex flex-col items-center justify-center w-full h-[475px]">
            <div className="mb-4">
              <Image src="/logo.svg" alt="DBC Company" width={80} height={80} className="mx-auto h-6 w-auto" />
            </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-screen-lg text-center pt-8">
        <div><a href="#como-funciona">Como funciona</a></div>
        <div><a href="#nossa-jornada">Nossa jornada</a></div>
        <div><a href="#beneficios">Benefícios</a></div>
        <div><a href="#faq">FAQ</a></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-screen-lg text-center mt-4 pb-24">
        <div className="flex justify-center"><a href="https://www.facebook.com/dbccompany.com.br" target="_blank" rel="noopener noreferrer"><FacebookLogo size={32} weight="fill" /></a></div>
        <div className="flex justify-center"><a href="https://www.instagram.com/dbc.company/" target="_blank" rel="noopener noreferrer"><InstagramLogo size={32} weight="bold" /></a></div>
        <div className="flex justify-center"><a href="https://www.linkedin.com/company/dbc-company/mycompany/" target="_blank" rel="noopener noreferrer"><LinkedinLogo size={32} weight="fill" /></a></div>
        <div className="flex justify-center"><a href="https://www.youtube.com/@dbc.company" target="_blank" rel="noopener noreferrer"><YoutubeLogo size={32} weight="fill" /></a></div>
      </div>
      
      <div className="w-full max-w-screen-2xl border-t border-white mx-auto pt-42">
    <div className="flex justify-between w-full">
        <span className="text-left">&copy; {getCurrentYear()} Digital Business Company. Todos os direitos reservados. Diagramação e programação pelo programa Vem Ser.</span>
        <span className="text-right">Texto à direita</span>
    </div>
</div>
    
     
    </footer>
        </>
    );
}