import DefaultTextMenu from '@/components/atoms/default-text-menu/DefaultTextMenu';
import Image from 'next/image';
import { HeaderDrawer } from '../header-drawer/HeaderDrawer';
import Link from 'next/link';

export default function BarNav() {
  return (
    <>
      <nav className="flex justify-between item-center bg-brand-darker px-7 py-4 lg:px-32">
        <div className="flex items-center">
          <Link href="/#">
          <Image
            src="/logo.svg"
            alt="DBC Company"
            width={100}
            height={32}
          />
          </Link>
        </div>
        <div className="ml-auto hidden md:flex py-3 space-x-4">
          <DefaultTextMenu href="#">Como funciona</DefaultTextMenu>
          <DefaultTextMenu href="#">Nossa jornada</DefaultTextMenu>
          <DefaultTextMenu href="#">Benefícios</DefaultTextMenu>
          <DefaultTextMenu href="#">FAQ</DefaultTextMenu>
        </div>
        <div className='md:hidden'>
          <HeaderDrawer/>
        </div>

      </nav>
    </>
  );
}
