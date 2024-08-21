import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { TFieldContainerClasses } from '../model/classes-types'
import { cn } from '$/shared/utils'

const fieldContainerConfig = cva('relative flex flex-col group', {
  variants: {
    size: {
      sm: 'w-[360px]',
      md: 'w-[520px]',
      lg: 'w-[720px]',
      full: 'w-full'
    }
  },
  defaultVariants: {
    size: 'full'
  }
})

export type TFieldContainerConfig = VariantProps<typeof fieldContainerConfig>

interface IFieldContainerProps extends TFieldContainerConfig {
  classes?: Partial<TFieldContainerClasses>
  children: ReactNode
}

export const FieldContainer = ({ size, classes, children }: IFieldContainerProps) => {
  return <div className={cn(fieldContainerConfig({ size }), classes?.container)}>{children}</div>
}
