import { Provider } from 'react-redux'
import { store } from '@/app/store'
import type { IProviderProps } from '../model/types'

export const ReduxProvider = ({ children }: IProviderProps) => <Provider store={store}>{children}</Provider>
