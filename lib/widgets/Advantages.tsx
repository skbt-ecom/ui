import { Heading } from '$/shared/ui'

export interface IAdvantage {
  title: string
  description: string
}

export interface IAdvantagesProps {
  advantagesList: IAdvantage[]
}

export const Advantages = ({ advantagesList }: IAdvantagesProps) => {
  return (
    <div className='flex desktop:flex-row items-center bg-color-blue-grey-100 rounded-md'>
      {advantagesList?.map(({ title, description }) => (
        <div
          key={title}
          className='relative flex flex-col gap-2 py-6 px-8 max-w-[285px] after:h-10 after:w-[1px] after:content-[" "] after:absolute after:border-warm-grey-200 after:right-0 last:after:hidden'
        >
          <Heading as='h4' className='text-color-dark'>
            {title}
          </Heading>
          <div className='desk-body-regular-l text-color-tetriary'>{description}</div>
        </div>
      ))}
    </div>
  )
}
