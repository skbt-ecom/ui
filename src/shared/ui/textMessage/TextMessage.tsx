import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const messageConfig = cva('desk-body-regular-m mt-2 ml-3', {
  variants: {
    intent: {
      simple: 'text-color-tetriary',
      error: 'text-color-negative'
    }
  },
  defaultVariants: {
    intent: 'simple'
  }
})

export interface ITextMessageProps extends VariantProps<typeof messageConfig> {
  as?: 'div' | 'span' | 'p'
  text: string
  className?: string
}

export const TextMessage = ({ intent, as: Element = 'p', text, className, ...props }: ITextMessageProps) => {
  return (
    <Element className={cn(messageConfig({ intent }), className)} {...props}>
      {text}
    </Element>
  )
}
