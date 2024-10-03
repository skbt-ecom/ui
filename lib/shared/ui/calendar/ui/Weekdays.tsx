import { DAYS_OF_WEEK } from '../model/helpers'
import { cn } from '$/shared/utils'

export const Weekdays = () => {
  return (
    <thead>
      <tr>
        {DAYS_OF_WEEK.map(({ day, isWeekend }) => (
          <th key={day} className={cn('size-10 text-color-dark', { 'text-color-negative': isWeekend })}>
            {day}
          </th>
        ))}
      </tr>
    </thead>
  )
}
