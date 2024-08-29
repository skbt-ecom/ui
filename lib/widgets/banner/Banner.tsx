import { Advantages, type IAdvantage } from '../Advantages'
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
  advantagesList?: IAdvantage[]
}

export const Banner = ({ headTitle, subtitle, buttonsConfig, advantagesList }: IBannerProps) => {
  return (
    <section className='h-[456px] bg-banner-skyblue-300 relative'>
      <ResponsiveContainer>
        <div className='flex flex-col desktop:flex-row desktop:justify-between'>
          <div className='relative z-10 flex flex-col gap-10 pt-6 desktop:pt-20'>
            <div className='flex flex-col gap-4'>
              <Heading as='h1' className='text-color-dark'>
                {headTitle}
              </Heading>
              <p className='desk-body-regular-l text-color-dark'>{subtitle}</p>
            </div>
            <BannerButtonsGroup buttonsConfig={buttonsConfig} />
          </div>
          <div className='w-full h-[410px] mobile:absolute mobile:left-1/2 mobile:bottom-0 mobile:-translate-x-1/2 desktop:w-[550px] desktop:h-full '>
            <img src={money} alt='money' className='w-full h-full object-contain' />
          </div>
        </div>
        <div className='absolute bottom-[-400px] desktop:bottom-[-50px]'>
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
