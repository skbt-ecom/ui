import { useBoolean } from '$/shared/hooks'

export const useCalendarDropdowns = () => {
  const [isMonthOpen, monthsSetter] = useBoolean(false)
  const [isYearsOpen, yearsSetter] = useBoolean(false)
  const [isCalendarOpen, calendarSetter] = useBoolean(false)

  const toggleCalendar = (onClickIcon?: (...args: unknown[]) => unknown) => {
    calendarSetter()
    if (onClickIcon) {
      onClickIcon()
    }
  }

  const toggleMonthDropdown = () => {
    monthsSetter()
    if (isYearsOpen) {
      yearsSetter(false)
    }
  }

  const toggleYearDropdown = () => {
    yearsSetter()
    if (isMonthOpen) {
      monthsSetter(false)
    }
  }

  return {
    calendarSetter,
    toggleCalendar,
    isMonthOpen,
    toggleMonthDropdown,
    isYearsOpen,
    toggleYearDropdown,
    isCalendarOpen
  }
}
