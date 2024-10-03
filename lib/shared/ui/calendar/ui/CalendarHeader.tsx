import { type NavProps } from 'react-day-picker'
import { MONTHS_OPTIONS, YEARS_OPTIONS } from '../model/helpers'
import type { TControlledDate } from '../model/hooks'
import { Dropdown } from './Dropdown'
import { NavigationArrows } from './NavigationArrows'

interface ICalendarHeaderProps extends NavProps {
  controlledDate: TControlledDate
  isMonthOpen: boolean
  toggleMonthDropdown: () => void
  isYearsOpen: boolean
  toggleYearDropdown: () => void
  onSelectMonth: (month: number) => void
  onSelectYear: (year: number) => void
  onClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const CalendarHeader = ({
  onSelectMonth,
  onSelectYear,
  onClickPrev,
  onClickNext,
  controlledDate,
  isMonthOpen,
  toggleMonthDropdown,
  isYearsOpen,
  toggleYearDropdown
}: ICalendarHeaderProps) => {
  return (
    <div className='w-full flex items-center justify-between pb-2 border-b border-solid border-blue-grey-500'>
      <div className='flex items-center'>
        <Dropdown
          options={MONTHS_OPTIONS}
          isActive={isMonthOpen}
          selectedDate={MONTHS_OPTIONS[controlledDate.month]}
          onClickTrigger={toggleMonthDropdown}
          onClickOption={onSelectMonth}
        />

        <Dropdown
          options={YEARS_OPTIONS}
          isActive={isYearsOpen}
          selectedDate={controlledDate.year}
          onClickTrigger={toggleYearDropdown}
          onClickOption={onSelectYear}
          variant='years'
        />
      </div>

      <NavigationArrows onPreviousClick={onClickPrev} onNextClick={onClickNext} />
    </div>
  )
}
