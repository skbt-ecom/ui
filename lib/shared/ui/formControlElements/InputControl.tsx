'use client'

import * as React from 'react'
import { Controller, type FieldValues } from 'react-hook-form'
import type { TAdditionalInputClassesWithAttachment, TControlledInputProps, TInputCommonProps } from './model'
import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from './ui'
import { cn } from '$/shared/utils'

export interface InputControlProps<T extends FieldValues> extends TControlledInputProps<T>, TInputCommonProps {
  classes?: Partial<TAdditionalInputClassesWithAttachment>
}

export const InputControl = <T extends FieldValues>({
  label,
  size = 'full',
  helperText,
  control,
  classes,
  badge,
  icon,
  swapPosition,
  disabled,
  ...props
}: InputControlProps<T>) => {
  const inputId = React.useId()
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
                  'desk-body-regular-l h-[56px] w-full rounded-md bg-color-transparent px-4 pt-5 text-color-dark outline-none transition-all',
                  classes?.input
                )}
                id={inputId}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...props}
              />
              <FieldAttachment badge={badge} icon={icon} error={!!error?.message} classes={classes} swapPosition={swapPosition} />
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
