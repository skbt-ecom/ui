import { brandLogosVariants, Button, PhoneView, ResponsiveContainer, type TBrandLogoVariant } from '$/shared/ui'

export interface IPageHeaderProps {
  logoPath?: string
  logoType?: TBrandLogoVariant
  variant?: 'withButton' | 'withPhone'
  phone?: string
  phoneText?: string
}

export const PageHeader = ({ logoPath = '/', logoType = 'main', variant = 'withButton', phone, phoneText }: IPageHeaderProps) => {
  return (
    <header className='bg-color-white flex items-center justify-center h-[72px]'>
      <ResponsiveContainer>
        <div className='flex items-center justify-between gap-5 px-5'>
          <a href={logoPath} target='_blank' rel='noreferrer' className='[&_svg]:w-[192px] h-[32px]'>
            {brandLogosVariants[logoType]}
          </a>
          {variant === 'withButton' ? (
            <Button intent='secondary' size='sm'>
              Оформить заявку
            </Button>
          ) : (
            <PhoneView phone={phone} text={phoneText} />
          )}
        </div>
      </ResponsiveContainer>
    </header>
  )
}
