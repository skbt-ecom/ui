import { Controller, type FieldValues } from 'react-hook-form'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Icon } from '../icon'
import { type TControlledInputProps } from './model'
import { FieldContainer, MessageView } from './ui'
import { cn } from '$/shared/utils'

interface ISelectControlClasses {
  trigger: string
  options: string
  scrollArea: string
  option: string
  icon: string
  message: string
  value: string
  label: string
}

export interface ISelectOption {
  id: string
  optionValue: string
  isDisabled?: boolean
}

type TRenderSelectedValue = {
  multiple: boolean
  controlledValue: string | string[]
  label: string
  isClearIntent: boolean
  disabled?: boolean
  classes?: Partial<ISelectControlClasses>
}

export interface ISelectControlProps<T extends FieldValues> extends TControlledInputProps<T> {
  classes?: Partial<ISelectControlClasses>
  optionsList: ISelectOption[]
  label: string
  multiple?: boolean
  intent?: 'filled' | 'clear'
  disabled?: boolean
}

const renderSelectedValue = ({ multiple, controlledValue, label, isClearIntent, disabled, classes }: TRenderSelectedValue) => {
  const labelElement = (
    <div
      className={cn(
        'desk-body-regular-l text-color-blue-grey-600 transition-colors',
        { 'group-data-[hover]:!text-color-primary-hover': isClearIntent },
        { '!text-color-disabled': disabled },
        classes?.label
      )}
    >
      {label}
    </div>
  )

  // if (multiple) {
  //   if (Array.isArray(controlledValue) && controlledValue.length > 0) {
  //     return <div className={cn('text-color-dark flex-1', classes?.value)}>{controlledValue.join('; ')}</div>
  //   }
  //   return labelElement
  // }

  if (multiple) {
    if (Array.isArray(controlledValue) && controlledValue.length > 0) {
      return (
        <div className='flex flex-wrap items-center gap-2'>
          {controlledValue.map((value) => (
            <div className={cn('w-max rounded-sm bg-color-blue-grey-300 px-2 py-1 text-color-dark', classes?.value)}>{value}</div>
          ))}
        </div>
      )
    }
    return labelElement
  }

  if (controlledValue) {
    return <div className={cn('flex-1 text-color-dark', classes?.value)}>{controlledValue}</div>
  }
  return labelElement
}

export const SelectControl = <T extends FieldValues>({
  size,
  control,
  helperText,
  disabled,
  classes,
  optionsList,
  label,
  multiple = false,
  intent = 'filled',
  ...props
}: ISelectControlProps<T>) => {
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, name, value: controlledValue }, fieldState: { error } }) => {
        const selectedValues: ISelectOption[] = Array.isArray(controlledValue) ? controlledValue : []
        const isClearIntent = intent === 'clear'

        return (
          <FieldContainer size={size} intent={intent}>
            <Listbox
              disabled={disabled}
              value={multiple ? selectedValues : controlledValue}
              onChange={onChange}
              name={name}
              multiple={multiple}
            >
              <ListboxButton
                className={cn(
                  'group flex h-[56px] items-center justify-between rounded-sm bg-color-blue-grey-100 p-4 text-left outline outline-1 outline-transparent transition-all focus:outline-blue-grey-800 data-[hover]:bg-color-blue-grey-200 data-[active]:outline-blue-grey-800',
                  {
                    'h-full bg-color-transparent px-2 py-1 focus:outline-primary-focus data-[hover]:bg-color-transparent data-[active]:outline-primary-focus':
                      isClearIntent
                  },
                  {
                    'pointer-events-none !bg-color-blue-grey-100': disabled
                  },
                  {
                    '!outline-secondary-default': !!error?.message
                  },
                  classes?.trigger
                )}
              >
                {renderSelectedValue({ multiple, controlledValue, label, isClearIntent, disabled, classes })}

                <Icon
                  name='arrows/arrowRight'
                  className={cn(
                    'size-6 rotate-90 text-icon-blue-grey-600 transition-all group-data-[open]:-rotate-90',
                    { 'text-icon-blue-grey-700 group-data-[hover]:text-icon-primary-hover': isClearIntent },
                    { 'text-icon-disabled': disabled },
                    { 'text-icon-secondary-default': !!error?.message },
                    classes?.icon
                  )}
                />
              </ListboxButton>
              <MessageView
                className={cn(classes?.message)}
                intent={error?.message ? 'error' : 'simple'}
                text={error?.message || helperText}
                disabled={disabled}
              />
              <ListboxOptions
                className={cn(
                  'scrollHidden w-select-trigger items-start justify-start bg-color-white p-2 shadow-sm outline-transparent transition-opacity duration-200 data-[closed]:opacity-0',
                  classes?.options
                )}
                transition
                anchor={{
                  gap: 8
                }}
              >
                <div className={cn('customScrollbar-y !max-h-[246px] overflow-x-hidden p-2', classes?.scrollArea)}>
                  {optionsList?.map(({ optionValue, id, isDisabled }) => (
                    <ListboxOption
                      key={id}
                      value={optionValue}
                      disabled={isDisabled}
                      className={cn(
                        'desk-body-regular-l cursor-pointer rounded-sm p-2 text-color-dark transition-all hover:bg-color-primary-tr-hover hover:text-color-primary-hover data-[disabled]:pointer-events-none data-[focus]:bg-color-primary-tr-hover data-[disabled]:text-color-disabled data-[focus]:text-color-primary-hover',
                        classes?.option
                      )}
                    >
                      {({ selected }) => (
                        <div className={cn('flex items-center justify-between gap-2')}>
                          {optionValue}
                          <Icon
                            name='general/check'
                            className={cn('size-5 text-icon-primary-default', { invisible: !selected })}
                          />
                        </div>
                      )}
                    </ListboxOption>
                  ))}
                </div>
              </ListboxOptions>
            </Listbox>
          </FieldContainer>
        )
      }}
    />
  )
}
