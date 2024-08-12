'use client'

import { type ComponentProps, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const buttonConfig = cva(
  'group flex items-center justify-center cursor-pointer rounded-full outline-offset-[3px] outline-transparent outline-2 transition duration-12 active:scale-[0.97] disabled:pointer-events-none',
  {
    variants: {
      intent: {
        primary:
          'text-icon-white bg-color-primary-default hover:bg-color-primary-hover active:bg-color-primary-hover focus:bg-color-primary-hover focus:outline-primary-focus disabled:bg-color-primary-disabled',
        secondary:
          'text-icon-primary-default bg-color-transparent border border-solid outline-offset-4 border-primary-default hover:bg-color-primary-tr-hover hover:text-icon-primary-default hover:border-primary-hover  active:bg-color-primary-tr-pressed active:border-primary-hover active:text-icon-primary-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus disabled:bg-color-blue-grey-200 disabled:border-transparent disabled:text-icon-primary-disabled',
        ghost:
          'text-icon-primary-default bg-color-transparent hover:bg-color-primary-tr-hover focus:bg-color-primary-tr-focus focus:outline-primary-focus active:text-icon-primary-hover active:bg-color-primary-tr-pressed disabled:bg-color-transparent disabled:text-icon-primary-disabled'
      },
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12'
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg'
    }
  }
)

const buttonIconConfig = cva('size-[22px] flex items-center justify-center [&_svg]:size-full stroke-1', {
  variants: {
    iconType: {
      fill: '[&_*]:fill-current',
      stroke: '[&_*]:stroke-current',
      all: '[&_*]:fill-current [&_*]:stroke-current'
    }
  },
  defaultVariants: {
    iconType: 'stroke'
  }
})

type TButtonProps = VariantProps<typeof buttonConfig>
type TButtonIconProps = VariantProps<typeof buttonIconConfig>

export interface IButtonIconProps extends ComponentProps<'button'>, TButtonProps, TButtonIconProps {}

export const ButtonIcon = forwardRef<HTMLButtonElement, IButtonIconProps>(
  ({ size, intent, children, className, type = 'button', iconType, ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={cn(buttonConfig({ intent, size }), className)} {...props}>
        <span className={cn(buttonIconConfig({ iconType }))}>{children}</span>
      </button>
    )
  }
)
