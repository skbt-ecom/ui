import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector
