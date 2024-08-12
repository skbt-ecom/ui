import { type ComponentProps, useId } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'
import { MessageView } from '../messageView'

type TAdditionalClasses = {
  container: string
  field: string
  label: string
  input: string
  message: string
}

const containerConfig = cva('flex flex-col group', {
  variants: {
    size: {
      sm: 'w-[360px]',
      md: 'w-[520px]',
      lg: 'w-[720px]',
      full: 'w-full'
    }
  }
})

type TContainerProps = VariantProps<typeof containerConfig>
type InputBaseProps = Omit<ComponentProps<'input'>, 'name' | 'placeholder' | 'size' | 'type' | 'defaultValue'>

export interface InputControlMaskProps<T extends FieldValues> extends InputBaseProps, TContainerProps {
  name: Path<T>
  control: Control<T>
  format: string
  label: string
  mask?: string | string[]
  placeholder?: never
  allowEmptyFormatting?: boolean
  customOnChange?: (arg?: string) => void
  marker?: boolean
  helperText?: string
  classes?: Partial<TAdditionalClasses>
}

export const InputControlMask = <T extends FieldValues>({
  format,
  allowEmptyFormatting = false,
  mask = '',
  control,
  customOnChange,
  marker = true,
  size = 'full',
  helperText,
  label,
  classes,
  ...props
}: InputControlMaskProps<T>) => {
  const inputId = useId()

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={cn(containerConfig({ size }), classes?.container)}>
          <div
            className={cn(
              'relative border-solid rounded-md px-4 border border-warm-grey-300 group-focus-within:border-primary-default hover:border-primary-default',
              { '!border-negative': !!error?.message },
              classes?.field
            )}
          >
            <label
              htmlFor={inputId}
              className={cn(
                'absolute top-2/4 -translate-y-1/2 left-4 desk-body-regular-m text-color-tetriary pointer-events-none transition-all duration-15 group-focus-within:float-label',
                { '-translate-y-1/2 top-0 px-[10px] bg-color-white scale-90': value },
                classes?.label
              )}
            >
              {label}
              {marker && <span className='text-color-negative'> *</span>}
            </label>
            <PatternFormat
              value={value?.toString()}
              className={cn(
                ' w-full h-14 desk-body-regular-m text-color-dark transition-all bg-color-transparent outline-none',
                classes?.input
              )}
              format={format}
              allowEmptyFormatting={allowEmptyFormatting}
              mask={mask}
              onChange={(e) => {
                onChange(e)
                if (customOnChange) {
                  customOnChange(e.target.value)
                }
              }}
              {...props}
            />
          </div>
          <MessageView
            className={cn(classes?.message)}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
          />
        </div>
      )}
    />
  )
}
