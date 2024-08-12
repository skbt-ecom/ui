import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/shared/utils'
import type { IAccordionHeaderClasses, IAccordionItem, IAccordionRootClasses } from './model/types'
import { AccordionHeader } from './ui/AccordionHeader'

export interface IAccordionProps {
  accordionItems: IAccordionItem[]
  classes?: Partial<IAccordionRootClasses> & Partial<IAccordionHeaderClasses>
  defaultValue?: string[]
}

export const Accordion = ({ accordionItems, classes, defaultValue }: IAccordionProps) => {
  return (
    <AccordionPrimitive.Root
      className={cn('flex gap-5 flex-col', classes?.accordion)}
      type='multiple'
      defaultValue={defaultValue}
    >
      {accordionItems?.map(({ label, content }, index) => (
        <AccordionPrimitive.Item
          key={label}
          className={cn('w-full disabled:text-color-dark', classes?.item)}
          value={index.toString()}
        >
          <AccordionHeader classes={classes}>{label}</AccordionHeader>
          <AccordionPrimitive.Content
            className={cn(
              'desk-body-regular-l text-color-dark  overflow-hidden transition-all p-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown bg-color-transparent',
              classes?.content
            )}
          >
            {content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
