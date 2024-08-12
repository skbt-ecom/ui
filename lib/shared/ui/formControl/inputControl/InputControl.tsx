import { type ComponentProps, useId } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'
import { Badge } from '../../badge'
import { MessageView } from '../messageView'

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

type TAdditionalClasses = {
  container: string
  field: string
  label: string
  input: string
  message: string
}

type TContainerProps = VariantProps<typeof containerConfig>
type InputBaseProps = Omit<ComponentProps<'input'>, 'name' | 'placeholder' | 'size'>

export interface InputControlProps<T extends FieldValues> extends InputBaseProps, TContainerProps {
  label: string
  helperText?: string
  name: Path<T>
  control: Control<T>
  classes?: Partial<TAdditionalClasses>
  badge?: string
}

export const InputControl = <T extends FieldValues>({
  type,
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  ...props
}: InputControlProps<T>) => {
  const inputId = useId()
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <div className={cn(containerConfig({ size }), classes?.container)}>
          <div
            className={cn(
              'relative border-solid rounded-md border border-transparent bg-color-blue-grey-100 group-focus-within:border-blue-grey-800  focus:outline-blue-grey-800 hover:bg-color-blue-grey-200 active:bg-color-blue-grey-100 flex items-center justify-between',
              { '!border-negative': !!error?.message },
              classes?.field
            )}
          >
            <label
              htmlFor={inputId}
              className={cn(
                'absolute top-2/4 -translate-y-1/2 left-4 desk-body-regular-l text-color-tetriary pointer-events-none transition-all duration-15 group-focus-within:float-label ',
                { 'top-2 bg-color-transparent translate-y-0  desk-body-regular-s': value },
                classes?.label
              )}
            >
              {label}
            </label>
            <input
              aria-invalid={error?.message ? 'true' : 'false'}
              ref={ref}
              className={cn(
                'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4',
                classes?.input
              )}
              type={type}
              id={inputId}
              value={value}
              onChange={onChange}
              {...props}
            />
            <span className='mr-4'>{badge && <Badge className='bg-color-positive'>{badge}</Badge>}</span>
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
