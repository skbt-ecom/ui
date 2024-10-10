import { cn } from '$/shared/utils'

export const dayPickerClasses = (isRange?: boolean) => {
  return {
    weekday: 'size-10',
    months: '',
    month: 'pt-2 text-color-dark mob-body-medium-m',
    caption: 'flex justify-center pt-1 items-center',
    today:
      'text-color-primary-default relative before:content-[" "] before:w-4 before:h-[2px] before:rounded-[2px] before:bg-icon-primary-default before:absolute before:bottom-1 before:left-1/2 before:-translate-x-1/2',
    outside: 'text-color-tetriary',
    disabled: 'text-color-disabled',
    hidden: '',
    selected: 'bg-color-primary-default text-color-white',
    range_middle:
      '!bg-color-transparent !text-color-dark [&_button]:!h-[32px] [&_button]:!bg-color-primary-tr-hover [&_button]:rounded-none',
    range_end: '[&_button]:!h-[40px] rounded-sm',
    range_start: '[&_button]:!h-[40px] rounded-sm',
    day: 'text-color-dark mob-body-regular-m ',
    day_button: cn(
      'size-10 text-center cursor-pointer border border-solid border-transparent rounded-sm transition-all hover:bg-color-primary-tr-hover hover:border-primary-default',
      { 'h-[32px]': isRange }
    ),
    //--------------------------------
    nav: 'space-x-1 flex items-center',
    nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    nav_button_previous: 'absolute left-1',
    nav_button_next: 'absolute right-1',
    table: 'w-full border-collapse space-y-1',
    head_row: 'flex',
    head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
    row: 'flex w-full mt-2'
  }
}
