import { MONTHS_OPTIONS, YEARS_OPTIONS } from '../model/helpers'
import { type TDropdownClasses } from '../model/types'
import { Dropdown } from './Dropdown'
import { cn } from '$/shared/utils'

interface IHeaderProps {
  month: string
  year: string
  isYearsOpen: boolean
  isMonthOpen: boolean
  toggleMonthDropdown: () => void
  toggleYearDropdown: () => void
  onSelectMonth: (month: number) => void
  onSelectYear: (year: number) => void
  classes?: Partial<TDropdownClasses>
}

export const Header = ({
  isMonthOpen,
  isYearsOpen,
  toggleMonthDropdown,
  toggleYearDropdown,
  onSelectMonth,
  onSelectYear,
  month,
  year,
  classes
}: IHeaderProps) => {
  return (
    <div className={cn('flex items-center', classes?.dropdowns)}>
      <Dropdown
        options={MONTHS_OPTIONS}
        isActive={isMonthOpen}
        selectedValue={MONTHS_OPTIONS[+month - 1]}
        onClickTrigger={toggleMonthDropdown}
        onClickOption={onSelectMonth}
        classes={classes}
      />

      <Dropdown
        options={YEARS_OPTIONS}
        isActive={isYearsOpen}
        selectedValue={year}
        onClickTrigger={toggleYearDropdown}
        onClickOption={onSelectYear}
        variant='years'
        classes={classes}
      />
    </div>
  )
}
