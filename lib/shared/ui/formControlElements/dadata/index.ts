export { DadataInputControl, type IDadataInputControlProps } from './DadataInputControl'
// import { useId } from 'react'
// import { Controller, type FieldValues } from 'react-hook-form'
// import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
// import type { TAdditionalInputClasses, TControlledInputProps } from '../model'
// import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
// import type { TDadataBaseUrl, TDadataType } from './model/types'
// import { useDadata } from './model/useDadata'
// import { cn } from '$/shared/utils'

// type TDadataClasses = Partial<TAdditionalInputClasses> & {
//   options?: string
//   indentMargin?: string
// }

// export interface IDadataInputControlProps<T extends FieldValues> extends TControlledInputProps<T> {
//   classes?: TDadataClasses
//   dadataType?: TDadataType
//   dadataBaseUrl?: TDadataBaseUrl
// }

// export const DadataInputControl = <T extends FieldValues>({
//   control,
//   helperText,
//   classes,
//   size = 'full',
//   label,
//   disabled,
//   dadataType = 'fio',
//   dadataBaseUrl = 'cache',
//   badge = '+25%',
//   icon,
//   ...props
// }: IDadataInputControlProps<T>) => {
//   const { setQuery, suggestionsOptions } = useDadata(dadataType, dadataBaseUrl)
//   const inputId = useId()

//   return (
//     <Controller
//       control={control}
//       name={props.name}
//       render={({ field: { onChange, ref, name, value }, fieldState: { error } }) => {
//         return (
//           <FieldContainer size={size} classes={classes}>
//             <Combobox value={value} onChange={onChange}>
//               <FieldWrapper
//                 fieldId={inputId}
//                 label={label}
//                 classes={classes}
//                 disabled={disabled}
//                 value={value}
//                 error={!!error?.message}
//               >
//                 <>
//                   <ComboboxInput
//                     className={cn(
//                       'w-full h-[56px] desk-body-regular-l text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
//                       classes?.input
//                     )}
//                     ref={ref}
//                     name={name}
//                     value={value}
//                     displayValue={(currentValue: string) => {
//                       return currentValue
//                     }}
//                     onChange={(event) => {
//                       onChange(event.target.value)
//                       setQuery(event.target.value)
//                     }}
//                   />
//                   <FieldAttachment badge={badge} icon={icon} error={!!error?.message} classes={classes} />
//                 </>
//               </FieldWrapper>
//               <ComboboxOptions
//                 // portal
//                 // anchor='bottom end'
//                 transition
//                 className={cn(
//                   'absolute -bottom-[270px] w-full  data-[closed]:-translate-y-1/2 data-[closed]:opacity-0 transition-all scrollHidden p-2 rounded-md bg-color-white border-solid border border-blue-grey-700 mt-2 flex flex-col z-10'
//                 )}
//               >
//                 <div className='p-2 customScrollbar-y overflow-x-hidden !max-h-[246px]'>
//                   {suggestionsOptions && suggestionsOptions?.length > 0 ? (
//                     <>
//                       {suggestionsOptions?.map(({ value: suggestionValue, additionalText }) => {
//                         console.log(suggestionValue, '@suggestionValue')

//                         return (
//                           <ComboboxOption
//                             key={suggestionValue}
//                             value={suggestionValue ?? ''}
//                             className='cursor-pointer px-3 py-3 flex items-center justify-between gap-2 hover:bg-color-blue-grey-200 rounded-sm '
//                           >
//                             <div className='flex flex-col gap-1'>
//                               <p className='desk-body-regular-l'>{suggestionValue}</p>
//                               {additionalText && (
//                                 <span className='desk-body-regular-s text-color-tetriary'>{additionalText}</span>
//                               )}
//                             </div>
//                           </ComboboxOption>
//                         )
//                       })}
//                     </>
//                   ) : (
//                     <ComboboxOption value='петху'>СОМ БАДИ НОВ</ComboboxOption>
//                   )}
//                 </div>
//               </ComboboxOptions>
//             </Combobox>
//             <MessageView
//               className={cn(classes?.message)}
//               intent={error?.message ? 'error' : 'simple'}
//               text={error?.message || helperText}
//               disabled={false}
//             />
//           </FieldContainer>
//         )
//       }}
//     />
//   )
// }
