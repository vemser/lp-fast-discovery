import DefaultBtn from '@/components/atoms/default-btn/DefaultBtn';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../atoms/dialog/Dialog';

export function VideoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DefaultBtn className='w-full lg:w-fit'>
          Ver vídeo
        </DefaultBtn>
      </DialogTrigger>
      <DialogContent className='bg-white max-w-[870px]'>
        <DialogHeader>
          <DialogTitle className='pb-2 border-b-2 border-gray-light'>Confira o vídeo</DialogTitle>
          <DialogDescription className='pt-2'>
            <video className='w-100' controls preload='auto'>
              <source src="/video-rafa-oliveira-fast-discovery.mp4" type="video/mp4"/>
            </video>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
