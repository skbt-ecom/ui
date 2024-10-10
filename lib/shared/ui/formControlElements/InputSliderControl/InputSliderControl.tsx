import { useId, useRef } from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps } from '../model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
import { getInputSliderSuffix, getStepByVariant } from './helpers'
import { type TInputSliderProps } from './model/types'
import { SliderControl } from './ui'
import { cn } from '$/hybrid'

export interface InputSliderControlProps<T extends FieldValues>
  extends Omit<TControlledInputProps<T>, 'max' | 'min' | 'step'>,
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
  onInputChange,
  min,
  max,
  variant,
  ...props
}: InputSliderControlProps<T>) => {
  const inputId = useId()
  const ref = useRef<HTMLInputElement>(null)

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const suffixText = getInputSliderSuffix(variant, value)

        const handleIconClick = () => {
          if (ref.current) {
            ref?.current?.focus()
          }
        }

        const handleBlur = () => {
          if (value > max) {
            onChange(max)
          }
          if (value < min) {
            onChange(min)
          }
        }

        const handleChange = (val: number | undefined) => {
          if (val === undefined) {
            return
          }
          onChange(val)
          if (onInputChange) {
            onInputChange(val)
          }
        }

        return (
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
                <NumericFormat
                  aria-invalid={error?.message ? 'true' : 'false'}
                  className={cn(
                    'w-full h-[56px] desk-title-bold-s  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md group/slider',
                    classes?.input
                  )}
                  id={inputId}
                  onBlur={handleBlur}
                  value={value}
                  disabled={disabled}
                  suffix={` ${suffixText}`}
                  thousandsGroupStyle='thousand'
                  onValueChange={({ floatValue }) => handleChange(floatValue)}
                  thousandSeparator={' '}
                  allowNegative={false}
                  getInputRef={ref}
                  {...props}
                />
                <SliderControl
                  onValueChange={(inputValue) => onChange(inputValue[0])}
                  value={[value]}
                  min={min}
                  max={max}
                  step={getStepByVariant(value, variant)}
                  variant={variant}
                />

                <div aria-label='edit' onKeyDown={handleIconClick} role='button' tabIndex={0} onClick={handleIconClick}>
                  <FieldAttachment isSlider badge={badge} icon={icon} error={!!error?.message} classes={classes} />
                </div>
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
