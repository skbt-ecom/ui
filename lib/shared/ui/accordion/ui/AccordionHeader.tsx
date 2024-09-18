import { forwardRef, type ReactElement } from 'react'
import { Header, Trigger } from '@radix-ui/react-accordion'
import { Icon } from '../../icon/Icon'
import type { IAccordionHeaderClasses } from '../model/types'
import { cn } from '$/shared/utils'

interface IAccordionHeaderProps {
  children?: ReactElement | string
  classes?: Partial<IAccordionHeaderClasses>
}

export const AccordionHeader = forwardRef<HTMLButtonElement, IAccordionHeaderProps>(
  ({ children, classes, ...props }, forwardedRef) => (
    <Header className={cn('rounded-sm bg-color-primary-light-default', classes?.header)}>
      <Trigger
        ref={forwardedRef}
        className={cn(
          'outline-0 bg-color-transparent flex items-center justify-between gap-5 w-full cursor-pointer py-5 px-6 border border-transparent border-solid rounded-sm focus:border-primary-default group',
          classes?.trigger
        )}
        {...props}
      >
        <div className={cn('desk-body-medium-l text-color-dark', classes?.inner)}>{children}</div>
        <Icon
          name='arrows/arrowCircle'
          className={cn('group-data-[state=open]:rotate-180 transition-all text-icon-blue-grey-800 size-8', classes?.icon)}
        />
      </Trigger>
    </Header>
  )
)

AccordionHeader.displayName = 'AccordionHeader'
