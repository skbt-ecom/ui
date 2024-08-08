import type { IProviderProps } from './model/types'
import { ReduxProvider, ToasterProvider } from './ui'

export const RootProvider = ({ children }: IProviderProps) => {
  return (
    <ReduxProvider>
      <ToasterProvider />
      {children}
    </ReduxProvider>
  )
}
