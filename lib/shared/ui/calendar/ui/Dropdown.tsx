import { Icon } from '$/shared/ui/icon'
import { cn } from '$/shared/utils'

interface IDropdownProps<Value extends string | number> {
  options: Value[]
  isActive: boolean
  selectedDate: Value
  onClickTrigger: () => void
  onClickOption: (value: number) => void
  variant?: 'months' | 'years'
}

export const Dropdown = <Value extends string | number>({
  options,
  isActive,
  selectedDate,
  onClickTrigger,
  onClickOption,
  variant = 'months'
}: IDropdownProps<Value>) => {
  return (
    <div className='w-full z-20'>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={onClickTrigger}
        onClick={onClickTrigger}
        className={cn(
          'py-2 px-2 rounded-sm text-color-tetriary desk-body-medium-l flex items-center gap-[2px] transition-colors hover:bg-color-primary-tr-hover',
          { 'text-color-primary-default': isActive }
        )}
      >
        {selectedDate}
        <Icon
          name='arrows/arrowRight'
          className={cn('rotate-90 text-icon-blue-grey-800', { 'text-icon-primary-default': isActive })}
        />
      </div>

      <div
        className={cn(
          'flex flex-col absolute w-full h-[280px] transition-all  bottom-3 left-1/2 overflow-hidden -translate-x-1/2 px-4 z-10 opacity-0 invisible',
          {
            'opacity-100 visible': isActive
          }
        )}
      >
        <div
          className='customScrollbar-y overflow-y-auto px-2 bg-color-white overflow-x-hidden'
          role='listbox'
          aria-expanded={isActive ? 'true' : 'false'}
          aria-label={variant === 'months' ? 'Выбор месяца' : 'Выбор года'}
        >
          {options?.map((option, index) => {
            return (
              <div
                key={option}
                role='button'
                tabIndex={0}
                onClick={() => onClickOption(variant === 'months' ? index : (option as number))}
                onKeyDown={() => onClickOption(variant === 'months' ? index : (option as number))}
                className={cn(
                  'transition-colors px-2 py-[10px] rounded-sm bg-color-white text-color-dark cursor-pointer mob-body-regular-m hover:bg-color-primary-tr-hover  hover:text-color-primary-hover',
                  { '!bg-color-primary-default !text-color-white': selectedDate === option }
                )}
              >
                {option}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
