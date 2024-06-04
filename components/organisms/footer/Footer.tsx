import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="flex h-[100%] w-full flex-col items-center justify-center bg-brand-main pt-28 pb-36 text-white">
        <div className="mb-4">
          <Image
            src="/logo.svg"
            alt="DBC Company"
            width={80}
            height={80}
            className="mx-auto h-6 w-auto"
          />
        </div>
        <nav className="flex flex-col lg:flex-row m-auto max-w-fit gap-3 pt-8 text-center">
          <div>
            <a href="#como-funciona" className="py-1 px-3">Como funciona</a>
          </div>
          <div>
            <a href="#nossa-jornada" className="py-1 px-3">Nossa jornada</a>
          </div>
          <div>
            <a href="#beneficios" className="py-1 px-3">Benefícios</a>
          </div>
          <div>
            <a href="#faq" className="py-1 px-3">FAQ</a>
          </div>
        </nav>

        <div className="m-auto flex gap-5 md:gap-16 mt-8 pb-16 text-center">
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/dbccompany.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/dbc.company/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} weight="bold" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/company/dbc-company/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/@dbc.company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={32} weight="fill" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-[90%] border-t border-white pt-8 md:w-full md:max-w-screen-2xl">
          <div className="m-auto px-4 flex w-[90%] gap-5 lg:gap-0 flex-col items-center justify-between md:max-w-screen-2xl lg:w-full lg:flex-row">
            <span className=" flex-wrap w-full text-center text-sm lg:text-left">
              &copy; {getCurrentYear()} Digital Business Company. Todos os
              direitos reservados. Diagramação e programação pelo programa Vem
              Ser.
            </span>
            <span className=" text-center text-sm underline md:text-right">
              <a
                href="https://www.dbccompany.com.br/politica-de-privacidade/"
                target="_blank"
              >
                Leia sobre nossa política de privacidade
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
