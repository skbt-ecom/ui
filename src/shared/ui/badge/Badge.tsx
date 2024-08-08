import type { ReactElement } from 'react'
import { cn } from '@/shared/utils'

export interface IBadgeProps {
  children: ReactElement | string
  className?: string
}

export const Badge = ({ children, className }: IBadgeProps) => {
  return (
    <div
      className={cn(
        'min-h-6 min-w-6 px-2 py-1 flex items-center  justify-center rounded-full desk-body-regular-s bg-color-primary-default text-color-white',
        className
      )}
    >
      {children}
    </div>
  )
}
