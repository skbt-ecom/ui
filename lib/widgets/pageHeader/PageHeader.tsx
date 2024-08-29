import { brandLogos, Button, PhoneView, ResponsiveContainer, type TBrandLogoVariant } from '$/shared/ui'

export interface ICommonHeaderProps {
  logoPath?: string
  logoType?: TBrandLogoVariant
}
interface IHeaderWithPhone extends ICommonHeaderProps {
  variant: 'withPhone'
  phone: string
  phoneText: string
}
interface IHeaderWithButton extends ICommonHeaderProps {
  variant: 'withButton'
}

export type THeaderContentVariant = IHeaderWithButton | IHeaderWithPhone

const renderContent = (props: THeaderContentVariant) => {
  switch (props.variant) {
    case 'withButton':
      return (
        <Button intent='secondary' size='sm'>
          Оформить заявку
        </Button>
      )
    case 'withPhone':
      const { phone, phoneText } = props as IHeaderWithPhone
      return <PhoneView phone={phone} text={phoneText} />
    default:
      return 'withButton'
  }
}

export const PageHeader = (props: THeaderContentVariant) => {
  const { logoPath = '/', logoType = 'main' } = props

  return (
    <header className='bg-color-blue-grey-200 flex items-center justify-center h-[72px]'>
      <ResponsiveContainer>
        <div className='flex items-center justify-between gap-5 '>
          <a
            href={logoPath}
            target='_blank'
            rel='noreferrer'
            className='[&_svg]:w-[192px] [&_svg]:h-[32px] flex items-center justify-center'
          >
            {brandLogos[logoType]}
          </a>
          {renderContent(props)}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
