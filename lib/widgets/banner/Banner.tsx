import money from './money.png'
import { BannerButtonsGroup } from './ui/BannerButtonsGroup'
import { Heading, ResponsiveContainer } from '$/shared/ui'
import { type IButtonProps } from '$/shared/ui'

export type TButtonsConfig = {
  primary: IButtonProps
  secondary?: IButtonProps
}

export interface IBannerProps {
  headTitle: string
  subtitle: string
  buttonsConfig: TButtonsConfig
}

export const Banner = ({ headTitle, subtitle, buttonsConfig }: IBannerProps) => {
  return (
    <section className='h-[456px] bg-banner-skyblue-300'>
      <ResponsiveContainer>
        <div className=' flex justify-between'>
          <div className='flex flex-col gap-10 pt-20'>
            <div className='flex flex-col gap-4'>
              <Heading as='h1' className='text-color-dark'>
                {headTitle}
              </Heading>
              <p className='desk-body-regular-l text-color-dark'>{subtitle}</p>
            </div>
            <BannerButtonsGroup buttonsConfig={buttonsConfig} />
          </div>
          <div className='w-[550px] h-full'>
            <img src={money} alt='money' className='w-full h-full' />
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
