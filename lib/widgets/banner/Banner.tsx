import { Advantages, type IAdvantage } from '../Advantages'
import money from './money.png'
import { BannerButtonsGroup, type IBannerButtonsGroupClasses } from './ui/BannerButtonsGroup'
import { Heading, type IButtonProps, ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IBannerClasses extends IBannerButtonsGroupClasses {
  section: string
  container: string
  wrapper: string
  content: string
  textBlock: string
  title: string
  subtitle: string
  imageContainer: string
  image: string
  advantages: string
}

export type TButtonsConfig = {
  primary: IButtonProps
  secondary?: IButtonProps
}

export interface IBannerProps {
  headTitle: string
  subtitle: string
  buttonsConfig: TButtonsConfig
  advantagesList?: IAdvantage[]
  classes?: Partial<IBannerClasses>
}

export const Banner = ({ headTitle, subtitle, buttonsConfig, advantagesList, classes }: IBannerProps) => {
  return (
    <section className={cn('h-[456px] bg-banner-skyblue-300 relative', classes?.section)}>
      <ResponsiveContainer className={cn(classes?.container)}>
        <div className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
          <div className={cn('relative z-10 flex flex-col gap-10 pt-6 desktop:pt-20', classes?.content)}>
            <div className={cn('flex flex-col gap-4', classes?.textBlock)}>
              <Heading as='h1' className={cn('text-color-dark', classes?.title)}>
                {headTitle}
              </Heading>
              <p className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}>{subtitle}</p>
            </div>
            <BannerButtonsGroup buttonsConfig={buttonsConfig} classes={classes} />
          </div>
          <div
            className={cn(
              'w-full h-[410px] mobile:absolute mobile:left-1/2 mobile:bottom-0 mobile:-translate-x-1/2 desktop:w-[550px] desktop:h-full',
              classes?.imageContainer
            )}
          >
            <img src={money} alt='money' className={cn('w-full h-full object-contain', classes?.image)} />
          </div>
        </div>
        <div className={cn('absolute bottom-[-400px] desktop:bottom-[-50px]', classes?.advantages)}>
          {advantagesList && advantagesList?.length > 0 && <Advantages advantagesList={advantagesList} />}
        </div>
      </ResponsiveContainer>
    </section>
  )
}
