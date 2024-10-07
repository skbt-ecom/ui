export { Calendar, type ICalendarProps } from './Calendar'
// import { useCallback, useId, useRef } from 'react'
// import { DayPicker, type DayPickerProps, type NavProps, type PropsMulti, type PropsSingle } from 'react-day-picker'
// import { Controller, type FieldValues, useFormContext } from 'react-hook-form'
// import { PatternFormat } from 'react-number-format'
// import { ru } from 'date-fns/locale'
// import { AnimatePresence, motion } from 'framer-motion'
// import type { TAdditionalInputClassesWithAttachment, TControlledInputProps } from '../model'
// import { FieldAttachment, FieldContainer, FieldWrapper, MessageView } from '../ui'
// import { calendarAnimation } from './model/animation'
// import { useCalendarDropdowns, useDatePicker } from './model/hooks'
// import { CalendarHeader, Weekdays } from './ui'
// import { useClickOutside } from '$/shared/hooks'
// import { cn } from '$/shared/utils'

// // https://github.com/gpbl/react-day-picker/discussions/1570  - issue

// type TCalendarClasses = Partial<TAdditionalInputClassesWithAttachment> & {
//   root: string
//   wrapper: string
//   calendar: string
// }

// type AppProps = PropsSingle | PropsMulti

// // Type guard to check if props is for single mode
// function isSingleMode(props: AppProps): props is PropsSingle {
//   return props.mode === 'single'
// }

// export type ICalendarControlProps<T extends FieldValues> = TControlledInputProps<T> &
//   Omit<DayPickerProps, 'mode'> & {
//     maskFormat?: string
//     mask?: string | string[]
//     allowEmptyFormatting?: boolean
//     classes?: Partial<TCalendarClasses>
//     disabled?: boolean
//     onClickIcon?: (...args: unknown[]) => unknown
//     mode: string
//   }

// export const CalendarControl = <T extends FieldValues>({
//   control,
//   label,
//   helperText,
//   showOutsideDays = true,
//   maskFormat = '##.##.####',
//   allowEmptyFormatting = false,
//   mask = '',
//   size = 'full',
//   classes,
//   disabled,
//   icon,
//   badge,
//   swapPosition,
//   onClickIcon,
//   mode = 'single',
//   ...props
// }: ICalendarControlProps<T>) => {
//   const { setValue } = useFormContext()
//   const inputId = useId()
//   const calendarWrapperRef = useRef<HTMLDivElement>(null)
//   const { toggleCalendar, isCalendarOpen, calendarSetter, isMonthOpen, toggleMonthDropdown, isYearsOpen, toggleYearDropdown } =
//     useCalendarDropdowns()

//   const {
//     formattedControlledDate,
//     controlledDate,
//     onClickDay,
//     onChangeMonth,
//     onSelectMonth,
//     onSelectYear,
//     onBlurInput,
//     onClickPrev,
//     onClickNext
//   } = useDatePicker()
//   useClickOutside(calendarWrapperRef, () => calendarSetter(false))

//   const CaptionLabelComponent = useCallback(() => <></>, [])
//   const WeekComponent = useCallback(() => <Weekdays />, [])
//   const CalendarHeaderComponent = useCallback(
//     (onControlledChange: (...event: unknown[]) => void, navProps: NavProps) => {
//       return (
//         <CalendarHeader
//           controlledDate={controlledDate}
//           isMonthOpen={isMonthOpen}
//           toggleMonthDropdown={toggleMonthDropdown}
//           isYearsOpen={isYearsOpen}
//           toggleYearDropdown={toggleYearDropdown}
//           onSelectMonth={(month: number) => onSelectMonth(month, onControlledChange)}
//           onSelectYear={(year: number) => onSelectYear(year, onControlledChange)}
//           onClickPrev={(event) => onClickPrev(event, navProps.onPreviousClick)}
//           onClickNext={(event) => onClickNext(event, navProps.onNextClick)}
//           {...navProps}
//         />
//       )
//     },
//     [
//       controlledDate,
//       isMonthOpen,
//       toggleMonthDropdown,
//       isYearsOpen,
//       toggleYearDropdown,
//       onSelectMonth,
//       onSelectYear,
//       onClickPrev,
//       onClickNext
//     ]
//   )

//   return (
//     <Controller
//       control={control}
//       name={props.name}
//       render={({ field: { onChange, value }, fieldState: { error } }) => {
//         return (
//           <div className={cn('relative', classes?.root)} ref={calendarWrapperRef}>
//             <AnimatePresence>
//               {isCalendarOpen && (
//                 <motion.div
//                   className={cn(
//                     'absolute z-30 bottom-[-350px] right-0 invisible',
//                     { 'visible ': isCalendarOpen },
//                     classes?.wrapper
//                   )}
//                   {...calendarAnimation}
//                 >
//                   <DayPicker
//                     mode={mode}
//                     onDayClick={(date: Date) => onClickDay(date, onChange, () => calendarSetter(false))}
//                     month={formattedControlledDate}
//                     onMonthChange={(date: Date) => onChangeMonth(date, onChange)}
//                     pagedNavigation
//                     locale={ru}
//                     // disabled={{ dayOfWeek: [0, 6] }}
//                     // disabled={{ before: new Date() }}
//                     showOutsideDays={showOutsideDays}
//                     className={cn('w-[312px] h-[368px] p-4 shadow-sm relative bg-color-white', classes?.calendar)}
//                     classNames={{
//                       weekday: 'size-10',
//                       months: '',
//                       month: 'pt-2 text-color-dark mob-body-medium-m',
//                       caption: 'flex justify-center pt-1 items-center',
//                       today:
//                         'text-color-primary-default relative before:content-[" "] before:w-4 before:h-[2px] before:rounded-[2px] before:bg-icon-primary-default before:absolute before:bottom-1 before:left-1/2 before:-translate-x-1/2',
//                       outside: 'text-color-tetriary',
//                       disabled: 'text-color-disabled',
//                       hidden: '',
//                       selected: 'bg-color-primary-default text-color-white',
//                       range_middle: '!bg-color-primary-tr-hover !text-color-dark [&_button]:!h-[32px]',
//                       range_end: 'bg-color-negative',
//                       day: 'text-color-dark mob-body-regular-m',
//                       day_button:
//                         'size-10 text-center cursor-pointer border border-solid border-transparent rounded-sm transition-all hover:bg-color-primary-tr-hover hover:border-primary-default',
//                       //--------------------------------
//                       nav: 'space-x-1 flex items-center',
//                       nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
//                       nav_button_previous: 'absolute left-1',
//                       nav_button_next: 'absolute right-1',
//                       table: 'w-full border-collapse space-y-1',
//                       head_row: 'flex',
//                       head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
//                       row: 'flex w-full mt-2',
//                       ...classes
//                     }}
//                     components={{
//                       Weekdays: WeekComponent,
//                       CaptionLabel: CaptionLabelComponent,
//                       Nav: (navProps) => CalendarHeaderComponent(onChange, navProps)
//                     }}
//                     {...props}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <FieldContainer size={size} classes={classes}>
//               <FieldWrapper
//                 fieldId={inputId}
//                 label={label}
//                 classes={classes}
//                 disabled={disabled}
//                 value={value}
//                 error={!!error?.message}
//               >
//                 <>
//                   <PatternFormat
//                     id={inputId}
//                     value={value}
//                     name={props.name}
//                     format={maskFormat}
//                     allowEmptyFormatting={allowEmptyFormatting}
//                     mask={mask}
//                     className={cn(
//                       'w-full h-[56px] desk-body-regular-l text-color-dark transition-all bg-color-transparent outline-none pt-5 px-4 rounded-md',
//                       classes?.input
//                     )}
//                     onFocus={() => calendarSetter(true)}
//                     onBlur={(event) => {
//                       onBlurInput(event.target.value, onChange)
//                       if (!event.target.value) {
//                         setValue(props.name as string, '')
//                       }
//                     }}
//                   />
//                   <FieldAttachment
//                     badge={badge}
//                     icon={icon}
//                     error={!!error?.message}
//                     classes={classes}
//                     swapPosition={swapPosition}
//                     onClickIcon={() => toggleCalendar(onClickIcon)}
//                     onKeyDownIcon={(event) => {
//                       if (event.key === 'Enter' || event.key === ' ') {
//                         toggleCalendar()
//                       }
//                     }}
//                   />
//                 </>
//               </FieldWrapper>
//               <MessageView
//                 className={cn(classes?.message)}
//                 intent={error?.message ? 'error' : 'simple'}
//                 text={error?.message || helperText}
//               />
//             </FieldContainer>
//           </div>
//         )
//       }}
//     />
//   )
// }
