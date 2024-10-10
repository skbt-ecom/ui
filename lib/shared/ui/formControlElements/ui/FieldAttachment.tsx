import { Badge } from '../../Badge'
import { Icon } from '../../icon/Icon'
import type { TFieldAttachmentClasses } from '../model/classes-types'
import type { TFieldAttachment } from '../model/props-types'
import { cn } from '$/shared/utils'

interface IFieldAttachmentProps extends TFieldAttachment {
  classes?: Partial<TFieldAttachmentClasses>
  error?: boolean
  isTextarea?: boolean
}

export const FieldAttachment = ({ badge, icon, error, isTextarea = false, classes }: IFieldAttachmentProps) => {
  return (
    <>
      {error ? (
        <Icon name='info/warningCircle' className={cn('mr-4 size-6 text-icon-secondary-default', { 'm-0 size-5': isTextarea })} />
      ) : (
        <>
          {(badge || icon) && (
            <span className={cn('mr-4 flex items-center gap-4', { 'm-0': isTextarea }, classes?.attachmentWrapper)}>
              {icon && (
                <span className={cn('flex size-6 items-center justify-center', { 'size-5': isTextarea }, classes?.icon)}>
                  {icon}
                </span>
              )}
              {badge && <Badge className={cn('bg-color-positive', classes?.badge)}>{badge}</Badge>}
            </span>
          )}
        </>
      )}
    </>
  )
}
