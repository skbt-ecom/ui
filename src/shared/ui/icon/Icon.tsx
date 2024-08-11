import type { SVGProps } from 'react'
import { cn } from '../../utils'
import { SPRITES_META, type SpritesMap } from '@/sprite.gen'

export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`
export type AnyIconName = { [Key in keyof SpritesMap]: IconName<Key> }[keyof SpritesMap]

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: AnyIconName
}

const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]]
  const {
    filePath,
    items: {
      [iconName]: { viewBox, width, height }
    }
  } = SPRITES_META[spriteName]
  // eslint-disable-next-line no-nested-ternary
  const axis = width === height ? 'xy' : width > height ? 'x' : 'y'

  return { filePath, iconName, viewBox, axis }
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  const { viewBox, filePath, iconName, axis } = getIconMeta(name)

  return (
    <svg
      className={cn('select-none fill-current inline-block text-inherit size-6', className)}
      focusable='false'
      viewBox={viewBox}
      aria-hidden
      data-axis={axis}
      {...props}
    >
      <use href={`/sprites/${filePath}#${iconName}`} />
    </svg>
  )
}