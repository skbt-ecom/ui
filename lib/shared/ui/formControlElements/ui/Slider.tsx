import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { type TInputSliderProps } from '../model'
import { cn } from '$/shared/utils'
import { formatNumber, getMinMaxTextSlider } from '$/shared/utils/slider'

export const SliderControl = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & TInputSliderProps
>(({ className, min, max, variant, ...props }, ref) => {
  const [start, end] = getMinMaxTextSlider(variant, min, max)

  return (
    <div className='absolute bottom-[-7px] w-full px-4'>
      <SliderPrimitive.Root
        ref={ref}
        className={cn('relative h-4 flex w-full touch-none select-none items-center', className)}
        min={min}
        max={max}
        {...props}
      >
        <span className='absolute left-[-10px] bottom-[-30px] text-color-tetriary desk-body-regular-m'>{`${formatNumber(min)} ${start}`}</span>
        <span className='absolute right-[-10px] bottom-[-30px] text-color-tetriary desk-body-regular-m'>{`${formatNumber(max)} ${end}`}</span>
        <SliderPrimitive.Track className='relative h-[2px] w-full grow overflow-hidden rounded-full bg-color-primary-default'>
          <SliderPrimitive.Range className='absolute h-full bg-primary' />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full border-2 bg-color-primary-default ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
      </SliderPrimitive.Root>
    </div>
  )
})
SliderPrimitive.Slider.displayName = SliderPrimitive.Root.displayName
