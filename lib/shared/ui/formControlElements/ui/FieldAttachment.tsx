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
        <Icon name='info/warningCircle' className={cn('text-icon-secondary-default size-6 mr-4', { 'm-0 size-5': isTextarea })} />
      ) : (
        <>
          {(badge || icon) && (
            <span className={cn('flex items-center gap-4 mr-4', { 'm-0': isTextarea }, classes?.attachmentWrapper)}>
              {icon && (
                <span className={cn('size-6 flex justify-center items-center', { 'size-5': isTextarea }, classes?.icon)}>
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
