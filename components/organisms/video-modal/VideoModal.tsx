import DefaultBtn from "@/components/atoms/default-btn/DefaultBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../atoms/dialog/Dialog";

import { YouTubeEmbed } from "@next/third-parties/google";

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
            <div className="w-full ">
              <YouTubeEmbed videoid="1JUXapnk4oE" params="controls=0" style="margin: 0 auto; border-radius: 4px; width: 100%" />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
