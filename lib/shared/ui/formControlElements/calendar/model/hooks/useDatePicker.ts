import { useState } from 'react'
import { format } from 'date-fns'
import { type TCalendarMode } from '../../CalendarControl'

export type TControlledDate = {
  day: number
  month: number
  year: number
}

type TDateSetter = {
  type: 'day' | 'month' | 'year'
  value: number
  updatedDate: Date
  onChange: (...event: unknown[]) => void
}

export const useDatePicker = () => {
  const [controlledDate, setControlledDate] = useState<TControlledDate>({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  })

  const formattedControlledDate = new Date(controlledDate.year, controlledDate.month, controlledDate.day)

  const dateSetter = ({ type, value, updatedDate, onChange }: TDateSetter) => {
    setControlledDate((prev) => ({ ...prev, [type]: value }))
    onChange(format(updatedDate, 'dd.MM.yyyy'))
  }

  const onClickDay = (date: Date, onChange: (...event: unknown[]) => void, mode: TCalendarMode, closeCalendar: () => void) => {
    if (mode === 'single') {
      const formattedDay = new Date(controlledDate.year, controlledDate.month, +format(date, 'dd'))
      dateSetter({ type: 'day', value: +format(date, 'dd'), updatedDate: formattedDay, onChange })
      closeCalendar()
    }
  }

  const onChangeMonth = (date: Date, onChange: (...event: unknown[]) => void) => {
    const formattedMonth = new Date(controlledDate.year, +format(date, 'MM') - 1, controlledDate.day)
    dateSetter({ type: 'month', value: +format(date, 'MM') - 1, updatedDate: formattedMonth, onChange })
  }

  const onSelectMonth = (month: number, onChange: (...event: unknown[]) => void) => {
    const formattedMonth = new Date(controlledDate.year, month, controlledDate.day)
    dateSetter({ type: 'month', value: month, updatedDate: formattedMonth, onChange })
  }

  const onSelectYear = (year: number, onChange: (...event: unknown[]) => void) => {
    const formattedYear = new Date(year, controlledDate.month, controlledDate.day)
    dateSetter({ type: 'year', value: year, updatedDate: formattedYear, onChange })
  }

  const onClickPrev = (
    event: React.MouseEvent<HTMLButtonElement>,
    onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    if (onPreviousClick) {
      onPreviousClick(event)
      setControlledDate((prev) => ({
        ...prev,
        year: prev.month === 0 ? prev.year - 1 : prev.year
      }))
    }
  }

  const onClickNext = (event: React.MouseEvent<HTMLButtonElement>, onNextClick?: React.MouseEventHandler<HTMLButtonElement>) => {
    if (onNextClick) {
      onNextClick(event)
      setControlledDate((prev) => ({
        ...prev,
        year: prev.month === 11 ? prev.year + 1 : prev.year
      }))
    }
  }

  const onBlurInput = (inputValue: string, onChange: (...event: unknown[]) => void) => {
    if (inputValue) {
      const [day, month, year] = inputValue?.split('.') ?? ''

      onChange(inputValue)
      setControlledDate({
        month: +month - 1,
        year: +year,
        day: +day
      })
    }
  }

  return {
    formattedControlledDate,
    controlledDate,
    setControlledDate,
    onClickDay,
    onChangeMonth,
    onSelectMonth,
    onSelectYear,
    onBlurInput,
    onClickPrev,
    onClickNext
  }
}
