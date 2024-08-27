import { type TButtonsConfig } from '../Banner'
import { Button } from '$/shared/ui'
import { cn } from '$/shared/utils'

interface IBannerButtonsGroupProps {
  buttonsConfig: TButtonsConfig
}

export const BannerButtonsGroup = ({ buttonsConfig }: IBannerButtonsGroupProps) => {
  const withSecondaryBtn = buttonsConfig?.secondary && buttonsConfig.secondary.children

  return (
    <div className={cn('w-max', { 'flex items-center gap-4': withSecondaryBtn })}>
      <Button intent='primary' {...buttonsConfig.primary}>
        {buttonsConfig.primary.children}
      </Button>
      {withSecondaryBtn && (
        <Button intent='secondary' {...buttonsConfig?.secondary}>
          {buttonsConfig?.secondary?.children}
        </Button>
      )}
    </div>
  )
}
