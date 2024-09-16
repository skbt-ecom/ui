import { useId } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps } from './model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from './ui'
import { SliderControl } from './ui/Slider'
import { cn } from '$/shared/utils'

export interface InputSliderControlProps<T extends FieldValues> extends TControlledInputProps<T> {
  classes?: Partial<TAdditionalInputClassesWithAttachment>
}

export const InputSliderControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  disabled,
  defaultValue,
  min,
  max,
  ...props
}: InputSliderControlProps<T>) => {
  const inputId = useId()
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <FieldContainer size={size} classes={classes}>
          <FieldWrapper
            fieldId={inputId}
            label={label}
            classes={classes}
            disabled={disabled}
            value={value}
            error={!!error?.message}
          >
            <>
              <input
                aria-invalid={error?.message ? 'true' : 'false'}
                ref={ref}
                className={cn(
                  'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                  classes?.input
                )}
                id={inputId}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...props}
              />
              <SliderControl
                onValueChange={(inputValue) => onChange(inputValue[0])}
                value={[value]}
                min={min}
                max={max}
                defaultValue={defaultValue}
              />
              <FieldAttachment badge={badge} icon={icon} error={!!error?.message} classes={classes} />
            </>
          </FieldWrapper>

          <MessageView
            className={cn(classes?.message)}
            intent={error?.message ? 'error' : 'simple'}
            text={error?.message || helperText}
            disabled={disabled}
          />
        </FieldContainer>
      )}
    />
  )
}
