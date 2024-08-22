import { cn } from '../utils'
import { Icon } from './Icon'

export interface IBreadcrumbLink {
  label: string
  path: string
  isDisabled?: boolean
}
interface IBreadcrumbLinkWithoutPath {
  label: string
  isDisabled?: boolean
}

export type TLinksList = [...IBreadcrumbLink[], IBreadcrumbLinkWithoutPath]

export interface IBreadcrumbsProps {
  linksList: TLinksList
}

export const Breadcrumbs = ({ linksList }: IBreadcrumbsProps) => {
  return (
    <div aria-label='Breadcrumb' className='max-w-[840px] flex items-center gap-2'>
      {linksList.map((link) => (
        <>
          {'path' in link ? (
            <div
              className={cn(
                'flex items-center gap-1 px-1 border-2 border-solid border-transparent rounded-sm focus-within:border-primary-focus',
                { '!border-transparent pointer-events-none': link?.isDisabled }
              )}
            >
              <a
                href={link.path}
                target='_blank'
                rel='noreferrer'
                className={cn(
                  'desk-body-regular-m text-color-primary-default hover:text-color-primary-hover outline-none focus:text-color-primary-default',
                  { '!text-color-disabled': link?.isDisabled }
                )}
              >
                {link.label}
              </a>
              <Icon
                name='common/arrowRight'
                className={cn('text-icon-primary-default size-4', { '!text-icon-disabled': link?.isDisabled })}
              />
            </div>
          ) : (
            <div aria-current='page' className='text-color-blue-grey-600 desk-body-regular-m'>
              {link.label}
            </div>
          )}
        </>
      ))}
    </div>
  )
}
