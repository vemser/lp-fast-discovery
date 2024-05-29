import DefaultBtn from '@/components/atoms/default-btn/DefaultBtn';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../../atoms/drawer/Drawer';
import { List } from '@phosphor-icons/react';

export function HeaderDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <List size={28} weight='bold' color='#FFF'/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <DefaultBtn>Submit</DefaultBtn>
          <SheetClose>
            <DefaultBtn variant="secondary">Cancel</DefaultBtn>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
