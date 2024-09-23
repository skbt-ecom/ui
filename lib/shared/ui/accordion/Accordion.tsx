import { type ReactElement, type ReactNode } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { TAccordionHeaderClasses, TAccordionRootClasses } from './model/types'
import { AccordionHeader } from './ui/AccordionHeader'
import { cn } from '$/shared/utils'

/**
 * @param {string[]} defaultOpen - По умолчанию открытые аккордеоны необходимо указать тот же label явно руками.
 * Пример defaultValue={['Заголовок аккордеона 1', 'Заголовок аккордеона 2']}
 */
export interface IAccordionProps {
  children: ReactNode
  label: string | ReactElement
  classes?: Partial<TAccordionHeaderClasses> & Partial<TAccordionRootClasses>
  defaultOpen?: string[]
}

export const Accordion = ({ children, label, classes, defaultOpen }: IAccordionProps) => {
  return (
    <AccordionPrimitive.Root className={cn('flex gap-5 flex-col', classes?.accordion)} type='multiple' defaultValue={defaultOpen}>
      <AccordionPrimitive.Item className={cn('w-full disabled:text-color-dark', classes?.item)} value={label.toString()}>
        <AccordionHeader classes={classes}>{label}</AccordionHeader>
        <AccordionPrimitive.Content
          className={cn(
            'desk-body-regular-l text-color-dark overflow-hidden transition-all data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown bg-color-transparent',
            classes?.content
          )}
        >
          <div className={cn('p-6', classes?.contentInner)}>{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}
