import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../atoms/carousel/Carousel';

import AutoPlay from "embla-carousel-autoplay"

import Img1 from '../../atoms/assets/imgs/bg_anima_um.png'
import Img2 from '../../atoms/assets/imgs/bg_anima_dois.png'


export function HeroCarousel() {
  return (
    <Carousel className='w-full outline-1 outline-red-400 -z-20' plugins={[
      AutoPlay({
        delay: 4000,
      }),
    ]}>
      <CarouselContent>
        <CarouselItem >
          <Image
            src={Img1}
            className='bg-hero-img-gradient'
            alt='.'
        />
        </CarouselItem>
        <CarouselItem>
        <Image
            src={Img2}
            alt='.'
        />
        </CarouselItem>
        <CarouselItem>
        <Image
            src={Img1}
            alt='.'
        />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
