import DefaultTextMenu from "@/components/atoms/default-text-menu/DefaultTextMenu";
import Image from "next/image";

export default function BarNav() {
  return (
    <>
      <nav className="flex justify-between item-center bg-brand-darker p-32 py-8">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="DBC Company"
            width={100}
            height={100}
          />
        </div>
        <div className="ml-auto flex space-x-4">
          <DefaultTextMenu href="#">Como funciona</DefaultTextMenu>
          <DefaultTextMenu href="#">Nossa jornada</DefaultTextMenu>
          <DefaultTextMenu href="#">Benefícios</DefaultTextMenu>
          <DefaultTextMenu href="#">FAQ</DefaultTextMenu>
        </div>
      </nav>
    </>
  );
}
