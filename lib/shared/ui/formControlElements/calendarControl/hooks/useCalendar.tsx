'use client'

import { useMemo, useState } from 'react'
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, parse, startOfWeek } from 'date-fns'
import { ru } from 'date-fns/locale'

export const useCalendar = (calendarValue: string) => {
  const [currentDate, setCurrentDate] = useState(calendarValue)
  const [selectedDay, selectedMonth, selectedYear] = currentDate?.split('.') ?? ''

  const formattedDate = format(new Date(+selectedYear, +selectedMonth - 1, +selectedDay), 'MMM-yyyy')
  const firstDayOfMonth = parse(formattedDate, 'MMM-yyyy', new Date())

  const daysOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayOfMonth))
  })
  const memoDaysOfMonth = useMemo(() => daysOfMonth, [daysOfMonth])

  const formattedMonth = format(selectedMonth, 'MMMM', { locale: ru })

  const onSelectDay = (day: Date, onChange: (...event: unknown[]) => void) => {
    const updatedDate = format(day, 'dd.MM.yyyy')
    onChange(updatedDate)
    setCurrentDate(updatedDate)
  }

  const onSelectMonth = (month: number, onChange: (...event: unknown[]) => void) => {
    const updatedDate = format(new Date(+selectedYear, +month, +selectedDay), 'dd.MM.yyyy')
    onChange(updatedDate)
    setCurrentDate(updatedDate)
  }

  const onSelectYear = (year: number, onChange: (...event: unknown[]) => void) => {
    const updatedDate = format(new Date(+year, +selectedMonth - 1, +selectedDay), 'dd.MM.yyyy')
    onChange(format(new Date(+year, +selectedMonth - 1, +selectedDay), 'dd.MM.yyyy'))
    setCurrentDate(updatedDate)
  }

  const onChangeMonth = (
    event: React.MouseEvent<HTMLButtonElement>,
    onChange: (...event: unknown[]) => void,
    mode: 'prev' | 'next'
  ) => {
    event.preventDefault()

    switch (mode) {
      case 'next':
        const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 })
        const updatedDateNext = format(firstDayOfNextMonth, 'dd.MM.yyyy')
        onChange(updatedDateNext)
        setCurrentDate(updatedDateNext)

        break
      case 'prev':
        const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 })
        const updatedDatePrev = format(firstDayOfPrevMonth, 'dd.MM.yyyy')
        onChange(updatedDatePrev)
        setCurrentDate(updatedDatePrev)

        break
      default:
        break
    }
  }

  const onBlurInput = (inputValue: string, onChange: (...event: unknown[]) => void) => {
    if (inputValue) {
      onChange(inputValue)
    }
  }

  return {
    memoDaysOfMonth,
    firstDayOfMonth,
    selectedDay,
    selectedMonth,
    selectedYear,
    formattedMonth,
    onSelectDay,
    onSelectMonth,
    onSelectYear,
    onBlurInput,
    onChangeMonth
  }
}
