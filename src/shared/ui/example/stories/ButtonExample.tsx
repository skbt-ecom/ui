import { cn } from '@/shared/utils'

export interface ButtonProps {
  backgroundColor?: string
  children: string
  onClick?: () => void
  className?: string
}

export const ButtonExample = ({ backgroundColor, children, className, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className={cn('size-16 text-color-negative bg-color-footer', className)}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  )
}
