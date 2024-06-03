import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '../../atoms/drawer/Drawer';
import { List } from '@phosphor-icons/react';
import Link from 'next/link';

export function HeaderDrawer() {
  return (
    <Sheet>
      <SheetTrigger title='menu'>
        <List
          size={28}
          weight="bold"
          color="#FFF"
          alt="ícone Menu hambúrguer"
        />
      </SheetTrigger>
      <SheetContent className="bg-brand-darker text-white">
        <SheetHeader>
          <SheetDescription>
            <div className="mt-12 flex flex-col gap-4">
              <div className="pb-4 border-b border-gray-light/25 text-right w-full">
                <Link
                  href="#como-funciona"
                  className="font-medium p-2"
                >
                  Como funciona
                </Link>
              </div>
              <div className="pb-4 border-b border-gray-light/25 text-right">
                <Link
                  href="#nossa-jornada"
                  className="font-medium p-2"
                >
                  Nossa jornada
                </Link>
              </div>
              <div className="pb-4 border-b border-gray-light/25 text-right">
                <Link
                  href="#beneficios"
                  className="font-medium p-2"
                >
                  Benefícios
                </Link>
              </div>
              <div className="pb-4 border-b border-gray-light/25 text-right">
                <Link
                  href="#faq"
                  className="font-medium p-2"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
