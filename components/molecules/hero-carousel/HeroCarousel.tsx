import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../atoms/carousel/Carousel';

import AutoPlay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import ImgPostIt from '../../atoms/assets/imgs/bg_anima_dois.jpg';
import imgPeople from '../../atoms/assets/imgs/bg_anima_um.png';

interface HeroCarouselProps {
  isStopAnimate: boolean;
}

export function HeroCarousel({ isStopAnimate }: HeroCarouselProps) {
  function defineCarouselConfig() {
    return isStopAnimate
      ? []
      : [
          AutoPlay({
            delay: 5000,
          }),
          Fade(),
        ];
  }

  return (
    <Carousel
      className="relative -z-20 overflow-hidden max-h-full"
      plugins={defineCarouselConfig()}
    >
      <CarouselContent>
        <CarouselItem className="h-[100vh] w-[100vw]">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                'linear-gradient(65.81deg, #01061A -8.06%, rgba(4, 12, 44, 0.07) 98.01%)',
            }}
          ></div>
          <Image
            src={ImgPostIt}
            quality={60}
            placeholder='blur'
            alt="Pessoa segurando a escrita da caneta azul no papel branco"
            className="object-cover h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh] w-[100vw]">
          <div
            className="absolute top-0 w-full h-full"
            style={{
              background:
                'linear-gradient(65.81deg, #01061A -8.06%, rgba(4, 12, 44, 0.07) 98.01%)',
            }}
          ></div>
          <Image
            src={imgPeople}
            quality={60}
            placeholder='blur'
            alt="Dois homens apresentando um poster com post-its"
            className="object-cover h-full"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
