import { type TDayOfWeek } from './types'

export const capitalizeFirstLetter = (query: string): string => {
  return query.charAt(0).toUpperCase() + query.substring(1)
}

export const colStartClasses = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7'
]

export const calendarAnimation = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.4, ease: 'easeInOut' }
}

const getYearsFromCurrentTo = (endYear = 1950) => {
  const currentYear = new Date().getFullYear()
  const years = []

  // eslint-disable-next-line no-plusplus
  for (let year = currentYear; year >= endYear; year--) {
    years.push(year)
  }

  return years
}
export const YEARS_OPTIONS = getYearsFromCurrentTo()

export const DAYS_OF_WEEK: TDayOfWeek[] = [
  { day: 'Пн' },
  { day: 'Вт' },
  { day: 'Ср' },
  { day: 'Чт' },
  { day: 'Пт' },
  { day: 'Сб', isWeekend: true },
  { day: 'Вс', isWeekend: true }
]

export const MONTHS_OPTIONS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
