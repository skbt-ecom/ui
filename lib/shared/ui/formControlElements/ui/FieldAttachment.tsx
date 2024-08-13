import type { ReactElement } from 'react'
import { Badge } from '../../badge'
import { Icon } from '../../icon'
import { cn } from '$/shared/utils'

export type TFieldAttachmentClasses = {
  badge: string
  icon: string
  attachmentWrapper: string
}

export interface IFieldAttachmentProps {
  badge?: string
  icon?: ReactElement
  classes?: Partial<TFieldAttachmentClasses>
  error?: boolean
}

export const FieldAttachment = ({ badge, icon, error, classes }: IFieldAttachmentProps) => {
  return (
    <>
      {error ? (
        <Icon name='common/warningCircle' className='text-icon-secondary-default mr-4 size-6' />
      ) : (
        <>
          {(badge || icon) && (
            <span className={cn('mr-4 flex items-center gap-4', classes?.attachmentWrapper)}>
              {icon && <span className={cn('size-6', classes?.icon)}>{icon}</span>}
              {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
            </span>
          )}
        </>
      )}
    </>
  )
}
