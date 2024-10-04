import type { ReactElement } from 'react'

export interface IBadgeProps {
  children: ReactElement | string
}

export const ExampleBadge = ({ children }: IBadgeProps) => {
  return (
    <span className='min-h-6 min-w-6 px-2 py-1 flex items-center justify-center rounded-full desk-body-regular-s bg-color-primary-default text-color-white text-nowrap'>
      {children}
    </span>
  )
}
