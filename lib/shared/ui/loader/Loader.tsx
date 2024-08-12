import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const loaderConfig = cva('border-2 border-solid block animate-spin rounded-full ', {
  variants: {
    intent: {
      primary: 'border-white border-b-transparent',
      secondary: 'border-primary-default border-b-transparent'
    },
    size: {
      sm: 'size-5 border-2',
      md: 'size-8 border-2',
      lg: 'size-12 border-4'
    },
    position: {
      absolute: 'absolute',
      static: 'static',
      fixed: 'fixed'
    }
  },
  defaultVariants: {
    size: 'md',
    position: 'static',
    intent: 'primary'
  }
})

export interface ILoaderProps extends VariantProps<typeof loaderConfig>, HTMLAttributes<HTMLDivElement> {
  intent?: 'primary' | 'secondary'
}

export const Loader = ({ size = 'md', className, intent = 'secondary', position = 'static', ...props }: ILoaderProps) => {
  return <span className={cn(loaderConfig({ size, intent, position }), className)} {...props}></span>
}
