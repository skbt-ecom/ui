export interface IPhoneViewProps {
  phone: string
  text: string
}
export const PhoneView = ({ phone, text }: IPhoneViewProps) => {
  return (
    <div className='flex flex-col'>
      <a href={`tel:${phone}`} className='text-color-dark desk-body-medium-l'>
        {phone}
      </a>
      <p className='text-color-tetriary desk-body-regular-l'>{text}</p>
    </div>
  )
}
