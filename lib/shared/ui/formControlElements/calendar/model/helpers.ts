import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'
import { ru } from 'date-fns/locale'

export const MONTHS_OPTIONS = eachMonthOfInterval({
  start: startOfYear(new Date()),
  end: endOfYear(new Date())
})
  .map((month) => format(month, 'LLLL', { locale: ru }))
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))

export const DAYS_OF_WEEK = [
  { day: 'Пн' },
  { day: 'Вт' },
  { day: 'Ср' },
  { day: 'Чт' },
  { day: 'Пт' },
  { day: 'Сб', isWeekend: true },
  { day: 'Вс', isWeekend: true }
]

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

// TODO: REMOVE
// export const markActiveDay = (currentDate: string) => {
//   const previousCell = document.querySelector('[data-focus="true"]')
//   if (previousCell) {
//     previousCell.setAttribute('data-focus', 'false')
//     previousCell.classList.remove('bg-color-primary-default', 'text-color-white')
//   }

//   const cell = document.querySelector(`[data-day="${currentDate}"]`)
//   if (cell) {
//     cell.setAttribute('data-focus', 'true')
//     cell.classList.add('bg-color-primary-default', 'text-color-white')
//   }

//   // markActiveDay(`${year}-${month}-${day}`) - ON BLUR
//   // markActiveDay(`${+format(date, 'yyyy')}-${+format(date, 'MM')}-${+format(date, 'dd')}`) - ON CLICK DAY
// }
