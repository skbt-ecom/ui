import { useEffect, useId, useState } from 'react'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Icon } from '../../icon'
import { MessageView, type TFieldAttachmentClasses } from '../ui'
import { fetchSuggestions } from './model/api'
import { useDebounceValue } from '$/shared/hooks'
import { cn } from '$/shared/utils'

type TOption = {
  value: string
}

type TAutocompleteControlClasses = TFieldAttachmentClasses & {
  container: string
  field: string
  label: string
  input: string
  message: string
}

export interface TFullName {
  surname?: string
  name?: string
  patronymic?: string
}

type TFieldContainerProps = VariantProps<typeof containerConfig>

export interface IAutocompleteProps<T extends FieldValues> extends TFieldContainerProps {
  name: Path<T>
  control: Control<T>
  helperText?: string
  classes?: Partial<TAutocompleteControlClasses>
  label: string
  disabled?: boolean
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

export const Autocomplete = <T extends FieldValues>({
  control,
  helperText,
  classes,
  size = 'full',
  label,
  disabled,
  ...props
}: IAutocompleteProps<T>) => {
  const [query, setQuery] = useState<string | null>('')
  const [suggestionsOptions, setSuggestionsOptions] = useState<TOption[] | null>(null)
  const debounceQuery = useDebounceValue(query, 200)
  const inputId = useId()

  useEffect(() => {
    if (debounceQuery) {
      const handleSearch = async (): Promise<void> => {
        const suggestions = await fetchSuggestions(debounceQuery)

        setSuggestionsOptions(
          suggestions?.map((suggestion) => ({
            value: suggestion.value,
            label: suggestion.value
          }))
        )
      }
      handleSearch()
    }
  }, [debounceQuery])

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
        return (
          <div className={cn(containerConfig({ size }), classes?.container)}>
            <Combobox value={value} onChange={onChange}>
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
                <ComboboxInput
                  className={cn(
                    'w-full h-[56px] desk-body-regular-l  text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
                    classes?.input
                  )}
                  ref={ref}
                  name={name}
                  displayValue={(currentValue: string) => {
                    return currentValue
                  }}
                  onChange={(event) => {
                    onChange(event.target.value)
                    setQuery(event.target.value)
                  }}
                />
              </div>
              <ComboboxOptions
                anchor='bottom'
                className='rounded-md bg-color-white w-autocomplete border-solid border border-blue-grey-700 mt-10 flex flex-col z-10'
              >
                {suggestionsOptions?.map(({ value: suggestionValue }) => (
                  <ComboboxOption
                    key={suggestionValue}
                    value={suggestionValue}
                    className='cursor-pointer desk-body-regular-l px-24 py-10 flex items-center justify-between gap-2'
                  >
                    {({ selected }) => (
                      <>
                        {suggestionValue} {selected && <Icon name='common/check' />}
                      </>
                    )}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
            <MessageView
              className={cn(classes?.message)}
              intent={error?.message ? 'error' : 'simple'}
              text={error?.message || helperText}
              disabled={false}
            />
          </div>
        )
      }}
    />
  )
}
