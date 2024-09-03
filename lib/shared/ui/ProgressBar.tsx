import { type ReactElement } from 'react'
import { cn } from '../utils'

interface IProgressBarClasses {
  wrapper: string
  topContent: string
  bottomContent: string
  progressBar: string
  progress: string
  loader: string
}

export interface IProgressBarProps {
  topContent?: ReactElement
  bottomContent?: ReactElement
  progress: number
  maxPercent?: number
  classes?: Partial<IProgressBarClasses>
}

export const ProgressBar = ({ topContent, bottomContent, progress, maxPercent = 100, classes }: IProgressBarProps) => {
  return (
    <div className={cn('flex flex-col', classes?.wrapper)}>
      {topContent && <div className={cn('flex justify-between gap-5 mb-2', classes?.topContent)}>{topContent}</div>}

      <div className={cn('relative w-[328xp] desktop:w-[524px] h-2 rounded-md bg-color-blue-grey-100', classes?.progressBar)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('relative transition-all bg-color-positive h-2 rounded-md z-[4]', classes?.progress)}
        ></div>
        <span
          style={{ maxWidth: `${maxPercent}%` }}
          className={cn(
            'absolute z-[2] h-full w-full rounded-md top-1/2 -translate-y-1/2 progressBar animate-progress-loader',
            classes?.loader
          )}
        ></span>
      </div>

      {bottomContent && <div className={cn('flex justify-between gap-5 mt-2', classes?.bottomContent)}>{bottomContent}</div>}
    </div>
  )
}
