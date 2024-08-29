import { type ReactElement } from 'react'
import { Heading } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IAdvantageClasses {
  wrapper: string
  advantage: string
  title: string
  description: string
}
export interface IAdvantage {
  title: string
  description: string | ReactElement
}

export interface IAdvantagesProps {
  advantagesList: IAdvantage[]
  classes?: Partial<IAdvantageClasses>
}

export const Advantages = ({ advantagesList, classes }: IAdvantagesProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 w-[328px] desktop:w-full desktop:flex-row desktop:items-start desktop:gap-0 mobile:p-6 desktop:py-6 bg-color-white rounded-md shadow-md',
        classes?.wrapper
      )}
    >
      {advantagesList?.map(({ title, description }) => (
        <div
          key={title}
          className={cn(
            'relative w-[285px] h-full flex flex-col gap-2 after:w-[280px] after:h-[1px] mobile:after:left-1/2 mobile:after:-bottom-4 mobile:after:-translate-x-1/2 desktop:px-8 desktop:after:right-0 desktop:after:top-1/2 desktop:after:-translate-y-1/2 desktop:after:h-10 desktop:after:w-[1px] after:content-[" "] after:absolute after:bg-color-blue-grey-300 last:after:hidden',
            classes?.advantage
          )}
        >
          <Heading as='h4' className={cn('text-color-dark', classes?.title)}>
            {title}
          </Heading>
          <p className={cn('desk-body-regular-l text-color-tetriary', classes?.description)}>{description}</p>
        </div>
      ))}
    </div>
  )
}
