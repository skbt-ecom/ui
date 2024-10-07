import type { MouseEventHandler } from 'react'
import { type TNavigationClasses } from '../model/types'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface INavigationProps {
  onClickPrevMonth: MouseEventHandler<HTMLButtonElement>
  onClickNextMonth: MouseEventHandler<HTMLButtonElement>
  classes?: Partial<TNavigationClasses>
}

export const Navigation = ({ onClickPrevMonth, onClickNextMonth, classes }: INavigationProps) => {
  return (
    <div className={cn('flex items-center justify-evenly gap-6', classes?.navigationWrapper)}>
      <button type='button' className={cn('w-6 h-6 cursor-pointer', classes?.swipeButton)} onClick={onClickPrevMonth}>
        <Icon
          name='arrows/arrowRight'
          className={cn(
            'size-6 rotate-180 text-icon-blue-grey-800 hover:text-icon-accent-hover transition-colors',
            classes?.arrowIcon
          )}
        />
      </button>
      <button type='button' className={cn('w-6 h-6 cursor-pointer', classes?.swipeButton)} onClick={onClickNextMonth}>
        <Icon
          name='arrows/arrowRight'
          className={cn('size-6 text-icon-blue-grey-800 hover:text-icon-accent-hover transition-colors', classes?.arrowIcon)}
        />
      </button>
    </div>
  )
}
