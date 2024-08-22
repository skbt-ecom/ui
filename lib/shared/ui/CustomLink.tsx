import { type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils'
import { type AnyIconName, Icon } from './Icon'

const customLinkConfig = cva(
  'group desk-body-regular-l underline underline-offset-4 outline-none p-[2px] rounded-sm border border-solid border-transparent',
  {
    variants: {
      intent: {
        blue: 'text-color-primary-default hover:text-color-primary-hover focus:text-color-primary-default focus:border-primary-focus',
        white: 'text-color-white hover:text-color-footer focus:text-color-white focus:border-primary-focus'
      },
      withIcon: {
        true: 'flex items-center gap-1',
        false: ''
      },
      disabled: {
        true: '!text-color-primary-disabled pointer-events-none !border-transparent',
        false: ''
      }
    },
    defaultVariants: {
      intent: 'blue',
      withIcon: true,
      disabled: false
    }
  }
)

const linkArrowConfig = cva('size-6', {
  variants: {
    intent: {
      blue: 'text-icon-primary-default group-hover:text-icon-primary-hover group-focus:text-icon-primary-default ',
      white: 'text-icon-white group-hover:text-icon-footer group-focus:text-icon-white'
    },
    disabled: {
      true: '!text-icon-primary-disabled pointer-events-none',
      false: ''
    }
  },
  defaultVariants: {
    intent: 'blue',
    disabled: false
  }
})

type TCustomLinkConfig = VariantProps<typeof customLinkConfig>

export interface ICustomLinkProps extends TCustomLinkConfig, ComponentProps<'a'> {
  Component: 'a'
  icon?: AnyIconName
}

export const CustomLink = ({
  Component,
  intent,
  children,
  withIcon,
  disabled,
  icon = 'common/arrowLink',
  ...props
}: ICustomLinkProps) => {
  return (
    <Component className={cn(customLinkConfig({ intent, withIcon, disabled }))} {...props}>
      {children}
      {withIcon && <Icon name={icon} className={cn(linkArrowConfig({ intent, disabled }))} />}
    </Component>
  )
}
