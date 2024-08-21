import type { ReactElement } from 'react'
import type { TFieldWrapperClasses } from '../model'
import { cn } from '$/shared/utils'

interface IFieldWrapperProps<V> {
  children: ReactElement
  label: string
  fieldId: string
  value: V
  error?: boolean
  classes?: Partial<TFieldWrapperClasses>
  disabled?: boolean
}

export const FieldWrapper = <V,>({ children, error, disabled, classes, fieldId, label, value }: IFieldWrapperProps<V>) => {
  return (
    <div
      className={cn(
        'relative border-solid rounded-md border border-transparent bg-color-blue-grey-100 group-focus-within:border-blue-grey-800  focus:outline-blue-grey-800 hover:bg-color-blue-grey-200 active:bg-color-blue-grey-100 flex items-center justify-between',
        { '!border-negative': error, '!bg-color-blue-grey-100': disabled },
        classes?.field
      )}
    >
      <label
        htmlFor={fieldId}
        className={cn(
          'absolute top-2/4 -translate-y-1/2 left-4 desk-body-regular-l text-color-tetriary pointer-events-none transition-all duration-15 group-focus-within:float-label',
          { 'top-2 bg-color-transparent translate-y-0  desk-body-regular-s': value },
          classes?.label
        )}
      >
        {label}
      </label>
      {children}
    </div>
  )
}
