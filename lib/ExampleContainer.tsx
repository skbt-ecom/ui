import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '$/shared/utils'

export interface IExampleContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const ExampleContainer = ({ children, className }: IExampleContainerProps) => {
  return <div className={cn('w-full px-4 m-auto desktop:max-w-[1188px]', className)}>{children}</div>
}
