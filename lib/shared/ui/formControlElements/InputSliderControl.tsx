import { useId, useState } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputSliderProps } from './model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from './ui'
import { SliderControl } from './ui/Slider'
import { cn } from '$/shared/utils'
import { getYearEnding } from '$/shared/utils/dates'

export interface InputSliderControlProps<T extends FieldValues>
  extends Omit<TControlledInputProps<T>, 'max' | 'min'>,
    TInputSliderProps {
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
  defaultValueSlider,
  min,
  max,
  sliderTextLeft,
  sliderTextRight,
  suffix,
  ...props
}: InputSliderControlProps<T>) => {
  const inputId = useId()
  const [focus, setFocus] = useState(false)

  return (
    <Controller
      control={control}
      name={props.name}
      // @ts-expect-error need read docs
      defaultValue={defaultValueSlider?.[0]}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => {
        let suffixText = ''

        const handleBlur = () => {
          setFocus(false)
          if (value > max) {
            onChange(max)
          }
          if (value < min) {
            onChange(min)
          }
        }

        if (suffix === 'years') {
          suffixText = getYearEnding(value)
        }

        return (
          <FieldContainer size={size} classes={classes}>
            <FieldWrapper fieldId={inputId} label={label} classes={classes} disabled={disabled} value error={!!error?.message}>
              <>
                <input
                  aria-invalid={error?.message ? 'true' : 'false'}
                  ref={ref}
                  className={cn(
                    'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                    classes?.input
                  )}
                  id={inputId}
                  onFocus={() => setFocus(true)}
                  onBlur={handleBlur}
                  value={focus ? value : `${value} ${suffixText}`}
                  onChange={onChange}
                  disabled={disabled}
                  {...props}
                />
                <SliderControl
                  onValueChange={(inputValue) => onChange(inputValue[0])}
                  value={[parseFloat(value)]}
                  defaultValue={defaultValueSlider}
                  min={min}
                  max={max}
                  sliderTextLeft={sliderTextLeft}
                  sliderTextRight={sliderTextRight}
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
        )
      }}
    />
  )
}
