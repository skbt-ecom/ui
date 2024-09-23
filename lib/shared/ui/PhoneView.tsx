import { cn } from '../utils'

interface IPhoneViewClasses {
  wrapper: string
  link: string
  text: string
}

export interface IPhoneViewProps {
  phone: string
  text: string
  classes?: Partial<IPhoneViewClasses>
}
export const PhoneView = ({ phone, text, classes }: IPhoneViewProps) => {
  return (
    <div className={cn('flex flex-col', classes?.wrapper)}>
      <a href={`tel:${phone}`} className={cn('text-color-dark desk-body-medium-l', classes?.link)}>
        {phone}
      </a>
      <p className={cn('text-color-tetriary desk-body-regular-l', classes?.text)}>{text}</p>
    </div>
  )
}
