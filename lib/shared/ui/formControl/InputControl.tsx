import { type ComponentProps, useId } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import { cva, type VariantProps } from 'class-variance-authority'
import { FieldAttachment, type IFieldAttachmentProps, MessageView, type TFieldAttachmentClasses } from './ui'
import { cn } from '$/shared/utils'

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

type TInputControlClasses = TFieldAttachmentClasses & {
  container: string
  field: string
  label: string
  input: string
  message: string
}

type TFieldContainerProps = VariantProps<typeof containerConfig>
type TInputBaseProps = Omit<ComponentProps<'input'>, 'name' | 'placeholder' | 'size'>

export interface InputControlProps<T extends FieldValues> extends TInputBaseProps, TFieldContainerProps, IFieldAttachmentProps {
  label: string
  helperText?: string
  name: Path<T>
  control: Control<T>
  classes?: Partial<TInputControlClasses>
}

export const InputControl = <T extends FieldValues>({
  type,
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  disabled,
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
              'relative border-solid rounded-md border border-transparent bg-color-blue-grey-100 group-focus-within:border-blue-grey-800  focus:outline-blue-grey-800 hover:bg-color-blue-grey-200 active:bg-color-blue-grey-100 flex items-center justify-between ',
              { '!border-negative': !!error?.message, '!bg-color-blue-grey-100': disabled },
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
                'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                classes?.input
              )}
              type={type}
              id={inputId}
              value={value}
              onChange={onChange}
              disabled={disabled}
              {...props}
            />
            <FieldAttachment
              badge={badge}
              icon={icon}
              error={!!error?.message}
              classes={{
                badge: classes?.badge,
                icon: classes?.icon,
                attachmentWrapper: classes?.attachmentWrapper
              }}
            />
          </div>
          <MessageView
            className={cn(classes?.message)}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </div>
      )}
    />
  )
}
