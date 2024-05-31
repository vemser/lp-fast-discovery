import DefaultBtn from '@/components/atoms/default-btn/DefaultBtn';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';
import { HeroCarousel } from '@/components/molecules/hero-carousel/HeroCarousel';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function BigHeroSection() {
  const [isStopAnimateCarousel, setIsStopAnimateCarousel] = useState(false);
  const router = useRouter()

  return (
    <section className="flex items-center h-[90dvh] relative">
      <DefaultBtn
        variant="text-button"
        className="pr-0 absolute top-2 right-7  md:top-7 md:right-32 text-white"
        onClick={() => setIsStopAnimateCarousel((state) => !state)}
      >
        <span>
          {isStopAnimateCarousel ? 'Continuar animação' : 'Pausar animação'}
        </span>
        {isStopAnimateCarousel ? (
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
      <div
        className="absolute flex flex-col gap-8 pr-6 left-6 lg:left-32 justify-start max-w-[500px] mb-14 sm:items-center sm:max-w-full sm:text-center
           lg:text-left"
        style={{ alignItems: 'start' }}
      >
        <h1 className="text-h1 text-white font-medium leading-[68px] max-w-2 text-left">
          Fast Product Discovery
        </h1>
        <p className="max-w-[300px] lg:max-w-[400px] text-white text-left">
          A ferramenta mais rápida e eficaz para validar seu produto digital no
          formato presencial ou remoto.
        </p>
        <div className="mt-3 w-full">
          <DefaultBtn onClick={() => router.push('#como-funciona')}>
            Saiba mais
          </DefaultBtn>
        </div>
      </div>

      <HeroCarousel isStopAnimate={isStopAnimateCarousel} />
    </section>
  );
}
