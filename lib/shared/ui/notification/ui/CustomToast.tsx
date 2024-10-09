import toast, { type Toast } from 'react-hot-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import type { INotificationProps } from '../Notification'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

const toastContainerConfig = cva(
  'flex justify-between items-start gap-4 shadow-sm p-4 rounded-sm max-w-[328px] desktop:max-w-[576px]',
  {
    variants: {
      intent: {
        info: 'bg-color-footer text-color-white',
        error: 'bg-color-secondary-default text-color-white'
      }
    },
    defaultVariants: {
      intent: 'info'
    }
  }
)

type TContainerConfig = VariantProps<typeof toastContainerConfig>
export type ICustomToastProps = INotificationProps & TContainerConfig & Toast

export const CustomToast = ({ intent, text, customIcon, closure = true, content, id }: ICustomToastProps) => {
  return (
    <div className={cn(toastContainerConfig({ intent }))}>
      <div className='flex gap-2 items-start'>
        <span className='size-6'>{customIcon}</span>
        <div className='desk-body-regular-m text-color-white'>{text}</div>
      </div>

      <div className='flex gap-6 items-center'>
        {content}

        {closure && (
          <Icon onClick={() => toast.dismiss(id)} name='general/close' className='size-5 text-icon-white cursor-pointer' />
        )}
      </div>
    </div>
  )
}
