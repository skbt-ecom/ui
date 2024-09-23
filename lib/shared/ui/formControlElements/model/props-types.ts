import type { ComponentProps, ReactElement } from 'react'
import type { Control, FieldValues, Path } from 'react-hook-form'
import type { TFieldContainerConfig } from '../ui/FieldContainer'

export type TInputCommonProps = Omit<ComponentProps<'input'>, 'name' | 'placeholder' | 'size' | 'type' | 'defaultValue'>
export type TTextareaCommonProps = Omit<ComponentProps<'textarea'>, 'name' | 'size' | 'type' | 'defaultValue'>

type TFieldControlledProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  label: string
  helperText?: string
}

export type TFieldContainerSize = 'sm' | 'md' | 'lg' | 'full'
export type TFieldAttachment = {
  badge?: string
  icon?: ReactElement
}

// # Required props on controlled INPUTS - [maskInput, baseInput, dadata]
export type TControlledInputProps<T extends FieldValues> = TFieldContainerConfig & TFieldAttachment & TFieldControlledProps<T>

// # Required props on controlled INPUTS - [checkbox, radio]
export type TControlledInputPrimitiveProps<T extends FieldValues> = TInputCommonProps & TFieldControlledProps<T>
