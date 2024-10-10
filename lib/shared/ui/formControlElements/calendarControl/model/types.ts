import { type TAdditionalInputClassesWithAttachment } from '../../model'

export type TDayOfWeek = {
  day: string
  isWeekend?: boolean
}

export type TDaysOfMonthClasses = {
  monthWrapper: string
  button: string
  day: string
}

export type TDaysOfWeekClasses = {
  weekWrapper: string
  weekDay: string
}

export type TNavigationClasses = {
  navigationWrapper: string
  swipeButton: string
  arrowIcon: string
}

export type TDropdownClasses = {
  dropdownWrapper: string
  dropdownTrigger: string
  dropdownIcon: string
  dropdownOverlay: string
  dropdownOptions: string
  dropdownOption: string
  dropdowns: string
}

export type TCalendarClasses = Partial<TDayOfWeek> &
  Partial<TDaysOfMonthClasses> &
  Partial<TDaysOfWeekClasses> &
  Partial<TNavigationClasses> &
  Partial<TDropdownClasses> &
  Partial<TAdditionalInputClassesWithAttachment> & {
    rootWrapper: string
    calendarWrapper: string
    calendarHeader: string
  }
