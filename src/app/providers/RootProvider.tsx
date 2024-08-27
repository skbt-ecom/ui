import type { IProviderProps } from './model/types'
import { ToasterProvider } from './ui'

export const RootProvider = ({ children }: IProviderProps) => {
  return (
    <>
      <ToasterProvider />
      {children}
    </>
  )
}
