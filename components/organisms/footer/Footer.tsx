import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../atoms/tooltip/Tooltip";

import logoImg from "../../atoms/assets/logo-dbc/logo.svg";
import DefaultTextMenu from "@/components/atoms/default-text-menu/DefaultTextMenu";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="flex h-[100%] w-full flex-col items-center justify-center bg-brand-main pb-36 pt-28 text-white">
        <div className="mb-4">
          <Image
            src={logoImg}
            alt="DBC Company"
            width={80}
            height={80}
            className="mx-auto h-6 w-auto"
          />
        </div>
        <nav className="m-auto flex max-w-fit flex-col gap-3 pt-8 text-center lg:flex-row">
          <div>
            <DefaultTextMenu href="#como-funciona">
              Como funciona
            </DefaultTextMenu>
          </div>
          <div>
            <DefaultTextMenu href="#nossa-jornada">
              Nossa jornada
            </DefaultTextMenu>
          </div>
          <div>
            <DefaultTextMenu href="#beneficios">Benefícios</DefaultTextMenu>
          </div>
          <div>
            <DefaultTextMenu href="#faq">FAQ</DefaultTextMenu>
          </div>
        </nav>

        <div className="m-auto mt-11 flex gap-5 pb-16 text-center md:gap-16">
          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.facebook.com/dbccompany.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook dbc link"
                  >
                    <FacebookLogo
                      size={32}
                      weight="fill"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/dbc.company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram dbc link"
                  >
                    <InstagramLogo
                      size={32}
                      weight="bold"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/company/dbc-company/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin dbc link"
                  >
                    <LinkedinLogo
                      size={32}
                      weight="fill"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.youtube.com/@dbc.company"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube dbc link"
                  >
                    <YoutubeLogo size={32} weight="fill" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Youtube</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="mx-auto w-[90%] border-t border-white pt-8 md:w-full md:max-w-screen-2xl">
          <div className="m-auto flex w-[90%] flex-col items-center justify-between gap-5 px-4 md:max-w-screen-2xl lg:w-full lg:flex-row lg:gap-0">
            <span className="w-full flex-wrap text-center text-sm lg:text-left">
              &copy; {getCurrentYear()} Digital Business Company. Todos os
              direitos reservados. Diagramação e programação pelo programa{" "}
              <a
                href="https://www.dbccompany.com.br/vem-ser/"
                className="text-center text-sm underline md:text-right"
                target="_blank"
              >
                Vem Ser.
              </a>
            </span>
            <span className="text-center text-sm underline md:text-right">
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
