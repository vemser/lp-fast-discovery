import DefaultBtn from "@/components/atoms/default-btn/DefaultBtn";
import { PauseCircle, PlayCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import peoplePresentingDesktopImg from "../../atoms/assets/imgs/people-presenting.jpg";

import styles from "./textAnimation.module.css";
import { VideoModal } from "../video-modal/VideoModal";

export function FastProccessSection() {
  const [isStopAnimateText, setIsStopAnimateText] = useState(false);

  return (
    <section className="flex h-fit w-full flex-1" id="como-funciona">
      <div className="flex min-h-[100dvh] w-full flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-24 lg:pl-32">
        <div className="flex max-w-[500px] flex-1 flex-col items-start justify-center gap-6 p-6 py-12 sm:max-w-full lg:mb-14 lg:mt-0 lg:items-start lg:p-0 lg:text-left">
          <span className="text-xs text-brand-darker">Como funciona</span>
          <h2 className="text-5xl font-medium leading-[3.5rem]">
            Um processo
            <div
              className={`h-14 overflow-hidden ${!isStopAnimateText ? styles.animation : ""}`}
            >
              <div>
                <span
                  className={`mb-[2.81rem] inline-block h-[2.81rem] text-brand-main`}
                >
                  rápido
                </span>
              </div>
              <div>
                <span
                  className={`mb-[2.81rem] inline-block h-[2.81rem] text-brand-main`}
                >
                  eficaz
                </span>
              </div>
              <div>
                <span
                  className={`mb-[2.81rem] inline-block h-[2.81rem] text-brand-main`}
                >
                  colaborativo
                </span>
              </div>
            </div>
          </h2>

          <DefaultBtn
            variant="text-button"
            className="pl-0 hover:text-brand-dark active:text-brand-darker"
            onClick={() => setIsStopAnimateText((state) => !state)}
          >
            <span>
              {isStopAnimateText ? "Continuar animação" : "Pausar animação"}
            </span>
            {isStopAnimateText ? (
              <PlayCircle weight="bold" className="text-lg" />
            ) : (
              <PauseCircle weight="bold" className="text-lg" />
            )}
          </DefaultBtn>

          <p className="max-w-[480px] text-base text-brand-darker">
            Nossa metodologia ágil acelera o desenvolvimento de produtos,
            priorizando interação com usuários para validar ideias rapidamente.
            Reduzindo o tempo entre concepção e lançamento, garante alinhamento
            com as necessidades dos usuários e inovação ágil.
          </p>

          <VideoModal />
        </div>

        <div className="flex h-full w-full flex-col items-center justify-start gap-2 4k:py-28  bg-blue-bg px-6 pb-12 lg:max-w-[50%] lg:justify-center lg:pb-0">
          <Image
            src={peoplePresentingDesktopImg}
            alt="Grupo de pessoas sentadas em um sofá com notebooks e post-its no quadro branco."
            className="-mt-6 max-w-[280px] rounded-lg md:max-w-[400px] lg:mr-32 lg:mt-0 lg:max-w-[100%]"
            style={{
              clipPath: "polygon(0% 0%, 0% 80%, 20% 100%, 100% 100%, 100% 0%)",
            }}
          />
          <span className="text-center text-xs lg:mr-32">
            <span className="font-medium">Legenda:</span> Grupo de pessoas
            sentadas em um sofá com notebooks e post-its no quadro branco.
          </span>
        </div>
      </div>
    </section>
  );
}
