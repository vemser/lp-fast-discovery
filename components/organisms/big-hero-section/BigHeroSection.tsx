import DefaultBtn from '@/components/atoms/default-btn/DefaultBtn';
import { VideoModal } from '../video-modal/VideoModal';
import { PauseCircle } from '@phosphor-icons/react';
import { HeroCarousel } from '@/components/molecules/hero-carousel/HeroCarousel';

export function BigHeroSection() {
  return (
    <section className="flex items-center h-[90dvh] relative">
      <DefaultBtn variant='text-button' className='absolute top-7 right-32 text-white'>
        <span>Pausar animaçao</span>
        <PauseCircle weight='bold' className='text-lg'/>
      </DefaultBtn>
      <div
        className="absolute flex flex-col gap-8 px-32 justify-start max-w-[500px] mb-14 sm:items-center sm:max-w-full sm:text-center
          lg:items-start lg:text-left"
      >
        <h1 className="text-h1 text-white font-medium leading-[68px] max-w-1.5">
          Fast Product Discovery
        </h1>
        <p className="max-w-[408px] text-white">
          A ferramenta mais rápida e eficaz para validar seu produto digital no
          formato presencial ou remoto.
        </p>
        <div className='mt-3'>
          <VideoModal />
        </div>
      </div>

      <HeroCarousel/>
    </section>
  );
}
