'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '../../../utils/tailwindMerge';
import { CaretDown } from '@phosphor-icons/react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={className}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
React.ElementRef<typeof AccordionPrimitive.Trigger>,
React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => 
  (
    <AccordionPrimitive.Header className={"flex shadow-md rounded-t-2xl bg-white data-[state=closed]:rounded-b-2xl"}>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          `flex flex-1 items-§ justify-start py-5 px-6 gap-6  bg-white rounded-2xl text-left font-bold transition-all 
          [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-2xl`,
          className
        )}

        {...props}
      >
        <CaretDown
          className="shrink-0 transition-transform duration-200 text-brand-main"
          weight="bold"
          size={20}
        />
        <span>{children}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm  transition-all pl-[4.25rem] pr-[4.25rem] bg-white data-[state=closed]:rounded-t-2xl data-[state=closed]:animate-accordion-up 
    data-[state=open]:animate-accordion-down data-[state=open]:rounded-b-2xl
    hadow-md"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
