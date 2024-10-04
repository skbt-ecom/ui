import type { HTMLAttributes, ReactNode } from 'react'

export interface IExampleContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ExampleContainer = ({ children }: IExampleContainerProps) => {
  return <div className='w-full px-4 m-auto desktop:max-w-[1188px]'>{children}</div>
}
