import DefaultBtn from '@/components/atoms/default-btn/DefaultBtn';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import peoplePresentingDesktopImg from '../../atoms/assets/imgs/people-presenting.jpg';
import peoplePresentingMobileImg from '../../atoms/assets/imgs/people-presenting-mobile.jpg';

import styles from './textAnimation.module.css'
import { VideoModal } from '../video-modal/VideoModal';

export function FastProccessSection() {
  const [isStopAnimateText, setIsStopAnimateText] = useState(false);

  return (
    <section
      className="flex w-full flex-1 h-fit"
      id="como-funciona"
    >
      <div className="flex-col flex gap-8 lg:gap-24 items-center h-[100dvh] w-full lg:flex-row lg:justify-between lg:pl-32">
        <div
          className="flex flex-1 flex-col gap-6 p-6 lg:p-0 justify-center items-start max-w-[500px] py-12 lg:mt-0 lg:mb-14  sm:max-w-full 
          lg:items-start lg:text-left
        "
        >
          <span className="text-xs text-brand-darker">Como funciona</span>
          <h2 className="text-5xl leading-[3.5rem] font-medium">
            Um processo
            <div className={`h-14 overflow-hidden ${!isStopAnimateText ? styles.animation : ''}`}>
              <div><span className={`inline-block text-brand-main h-[2.81rem] mb-[2.81rem]`}>rápido</span></div>
              <div><span className={`inline-block text-brand-main h-[2.81rem] mb-[2.81rem]`}>eficaz</span></div>
              <div><span className={`inline-block text-brand-main h-[2.81rem] mb-[2.81rem]`}>colaborativo</span></div>
            </div>
          </h2>

          <DefaultBtn
            variant="text-button"
            className="pl-0 hover:text-brand-dark active:text-brand-darker"
            onClick={() => setIsStopAnimateText((state) => !state)}
          >
            <span>
              {isStopAnimateText ? 'Continuar animação' : 'Pausar animação'}
            </span>
            {isStopAnimateText ? (
              <PlayCircle
                weight="bold"
                className="text-lg"
              />
            ) : (
              <PauseCircle
                weight="bold"
                className="text-lg"
              />
            )}
          </DefaultBtn>

          <p className="text-brand-darker text-base max-w-[480px]">
            Nossa metodologia ágil acelera o desenvolvimento de produtos,
            priorizando interação com usuários para validar ideias rapidamente.
            Reduzindo o tempo entre concepção e lançamento, garante alinhamento
            com as necessidades dos usuários e inovação ágil.
          </p>

          <VideoModal/>
        </div>

        <div
          className="flex flex-col justify-start gap-2 items-center px-6 pb-12  w-full h-full bg-blue-bg 
                       lg:max-w-[50%] lg:justify-center lg:pb-0"
        >
          <Image
            src={peoplePresentingDesktopImg}
            alt="Grupo de pessoas sentadas em um sofá com notebooks e post-its no quadro branco."
            className="lg:mr-32  max-w-[280px] md:max-w-[400px] -mt-6 rounded-lg 
                        lg:max-w-[100%] lg:mt-0"
            style={{
              clipPath: 'polygon(0% 0%, 0% 80%, 20% 100%, 100% 100%, 100% 0%)',
            }}
          />
          <span className="lg:mr-32 text-xs text-center">
            <span className="font-medium">Legenda:</span> Grupo de pessoas
            sentadas em um sofá com notebooks e post-its no quadro branco.
          </span>
        </div>
      </div>
    </section>
  );
}
