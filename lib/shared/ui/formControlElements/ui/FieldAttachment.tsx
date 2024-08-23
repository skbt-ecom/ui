import { Badge } from '../../Badge'
import { Icon } from '../../icon/Icon'
import type { TFieldAttachmentClasses } from '../model/classes-types'
import type { TFieldAttachment } from '../model/props-types'
import { cn } from '$/shared/utils'

interface IFieldAttachmentProps extends TFieldAttachment {
  classes?: Partial<TFieldAttachmentClasses>
  error?: boolean
}

export const FieldAttachment = ({ badge, icon, error, classes }: IFieldAttachmentProps) => {
  return (
    <>
      {error ? (
        <Icon name='common/warningCircle' className='text-icon-secondary-default size-6 mr-4' />
      ) : (
        <>
          {(badge || icon) && (
            <span className={cn('flex items-center gap-4 mr-4', classes?.attachmentWrapper)}>
              {icon && <span className={cn('size-6', classes?.icon)}>{icon}</span>}
              {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
            </span>
          )}
        </>
      )}
    </>
  )
}
