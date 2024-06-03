import DefaultBtn from "@/components/atoms/default-btn/DefaultBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/dialog/Dialog";

export function VideoModal() {
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DefaultBtn className="w-full lg:w-fit">Ver vídeo</DefaultBtn>
      </DialogTrigger>
      <DialogContent className="max-w-[870px] bg-white">
        <DialogHeader>
          <DialogTitle className="border-b-2 border-gray-light pb-2">
            Confira o vídeo
          </DialogTitle>
          <DialogDescription className="pt-2">
            <iframe
              width="100%"
              onLoad={() => console.log("carregado")}
              className="h-[350px] md:h-[400px] lg:h-[500px]"
              src="https://www.youtube.com/embed/1JUXapnk4oE?si=TC04kB5bvDDCRDv0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
