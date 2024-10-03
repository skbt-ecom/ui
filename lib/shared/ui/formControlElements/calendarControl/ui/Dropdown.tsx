import { type TDropdownClasses } from '../model/types'
import { OptionsList } from './OptionsList'
import { Icon } from '$/shared/ui'
import { cn } from '$/shared/utils'

export interface IDropdownProps<Value extends string | number> {
  options: Value[]
  selectedValue: string
  isActive: boolean
  onClickTrigger: () => void
  onClickOption: (value: number) => void
  variant?: 'months' | 'years'
  classes?: Partial<TDropdownClasses>
}

export const Dropdown = <Value extends string | number>({
  onClickTrigger,
  isActive,
  selectedValue,
  options,
  variant = 'months',
  onClickOption,
  classes
}: IDropdownProps<Value>) => {
  return (
    <div className={cn('w-full z-20', classes?.dropdownWrapper)}>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={onClickTrigger}
        onClick={onClickTrigger}
        className={cn(
          'py-2 px-2 rounded-sm text-color-tetriary desk-body-medium-l flex items-center gap-[2px] transition-colors hover:bg-color-primary-tr-hover',
          { 'text-color-primary-default': isActive },
          classes?.dropdownTrigger
        )}
      >
        {selectedValue}
        <Icon
          name='arrows/arrowRight'
          className={cn('rotate-90 text-icon-blue-grey-800', { 'text-icon-primary-default': isActive }, classes?.dropdownIcon)}
        />
      </div>

      <div
        className={cn(
          'flex flex-col absolute w-full h-[280px] transition-all  bottom-3 left-1/2 overflow-hidden -translate-x-1/2 px-4 z-10 opacity-0 invisible',
          { 'opacity-100 visible': isActive },
          classes?.dropdownOverlay
        )}
      >
        <OptionsList
          options={options}
          selectedValue={selectedValue}
          isActive={isActive}
          onClickOption={onClickOption}
          variant={variant}
        />
      </div>
    </div>
  )
}
