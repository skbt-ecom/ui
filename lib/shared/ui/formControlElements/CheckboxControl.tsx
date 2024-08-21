import { useId } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { Icon } from '../icon'
import type { TAdditionalInputPrimitiveClasses, TControlledInputPrimitiveProps } from './model'
import { MessageView } from './ui'
import { cn } from '$/shared/utils'

export interface ICheckboxControlProps<T extends FieldValues> extends TControlledInputPrimitiveProps<T> {
  classes?: Partial<TAdditionalInputPrimitiveClasses>
}

export const CheckboxControl = <T extends FieldValues>({
  control,
  helperText,
  label,
  disabled,
  classes,
  ...props
}: ICheckboxControlProps<T>) => {
  const checkboxId = useId()
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ref, name }, fieldState: { error } }) => {
        return (
          <div className={cn('flex items-center gap-4 max-w-[450px]', classes?.container)}>
            <div
              className={cn(
                'size-10 flex items-center justify-center rounded-full transition-all hover:bg-color-primary-tr-hover focus-within:bg-color-primary-tr-focus ',
                classes?.field,
                { '!bg-color-transparent': disabled }
              )}
            >
              <Root
                name={name}
                value={value}
                ref={ref}
                onCheckedChange={(e) => {
                  onChange(e)
                }}
                className={cn(
                  'size-6 rounded-sm cursor-pointer outline-none border border-solid border-blue-grey-700 flex items-center justify-center  data-[state=checked]:bg-color-primary-default active:bg-color-primary-tr-pressed data-[state=unchecked]:disabled:bg-color-blue-grey-300 disabled:border-transparent data-[state=checked]:disabled:bg-color-primary-disabled',
                  { '!border-negative': !!error?.message },
                  classes?.input
                )}
                disabled={disabled}
                id={checkboxId}
                defaultChecked={value}
                defaultValue={value}
              >
                <Indicator className={cn('flex items-center justify-center data-[state=checked]:text-icon-white')}>
                  <Icon name='common/check' className='size-5' />
                </Indicator>
              </Root>
            </div>

            <div className='flex flex-col flex-1'>
              <label
                className={cn(
                  'desk-body-regular-m text-color-dark cursor-pointer ',
                  { 'text-color-disabled': disabled },
                  classes?.label
                )}
                htmlFor={checkboxId}
              >
                {label}
              </label>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
            </div>
          </div>
        )
      }}
    />
  )
}
