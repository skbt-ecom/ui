import { cn } from '../utils'
import { Icon } from './Icon'

export interface IBreadcrumbLink {
  label: string
  path: string
}

interface IBreadcrumbLinkWithoutPath {
  label: string
}

export type Links = [...IBreadcrumbLink[], IBreadcrumbLinkWithoutPath]

export interface IBreadcrumbsProps {
  linksList: Links
}

export const Breadcrumbs = ({ linksList }: IBreadcrumbsProps) => {
  return (
    <div aria-label='Breadcrumb' className='max-w-[840px] flex items-center gap-2'>
      {linksList.map((link) => (
        <>
          {'path' in link ? (
            <div className='flex items-center gap-1'>
              <a
                href={link.path}
                target='_blank'
                rel='noreferrer'
                className={cn('desk-body-regular-m text-color-primary-default ')}
              >
                {link.label}
              </a>
              <Icon name='common/arrowRight' className='text-icon-primary-default size-4' />
            </div>
          ) : (
            <div className='text-color-blue-grey-600 desk-body-regular-m'>{link.label}</div>
          )}
        </>
      ))}
    </div>
  )
}
