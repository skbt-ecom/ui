import type { ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Heading } from '../heading'
import { ResponsiveContainer } from '../ResponsiveContainer'
import type { Body, ColumnCount, Titles } from './type'
import { cn } from '$/shared/utils'

const tableConfig = cva('grid', {
  variants: {
    intent: {
      twoColumns: 'grid-cols-[repeat(2,minmax(172px,_1fr))] desktop:grid-cols-[repeat(2,minmax(172px,_1fr))]',
      threeColumns: 'grid-cols-[repeat(3,minmax(172px,_1fr))] desktop:grid-cols-[repeat(3,minmax(312px,_1fr))]'
    }
  }
})

const itemTableConfig = cva('grid', {
  variants: {
    intent: {
      twoColumns: '',
      threeColumns: ''
    },
    titlesExist: {
      exist: '',
      notExist: ''
    }
  },
  compoundVariants: [
    {
      titlesExist: 'notExist',
      intent: 'twoColumns',
      class: 'grid-rows-[repeat(2,_auto)] border-b border-warm-grey-200 py-4'
    },
    {
      titlesExist: 'notExist',
      intent: 'threeColumns',
      class: 'grid-cols-[repeat(3,_auto)]'
    },
    {
      titlesExist: 'exist',
      intent: 'twoColumns',
      class: 'grid-cols-[repeat(2,_auto)]'
    },
    {
      titlesExist: 'exist',
      intent: 'threeColumns',
      class: 'grid-cols-[repeat(3,_auto)]'
    }
  ]
})

const tableOverflowConfig = cva('grid', {
  variants: {
    intent: {
      twoColumns: '',
      threeColumns: ''
    }
  },
  compoundVariants: [
    {
      intent: 'threeColumns',
      class: 'mobile:overflow-x-scroll mobile:max-w-[368px]'
    }
  ]
})

const textTableConfig = cva('desktop:desk-body-regular-l mob-body-regular-l', {
  variants: {
    intent: {
      twoColumns: '',
      threeColumns: ''
    },
    titlesExist: {
      exist: '',
      notExist: ''
    }
  },
  compoundVariants: [
    {
      titlesExist: 'notExist',
      intent: 'twoColumns',
      class: ''
    },
    {
      titlesExist: 'exist',
      intent: 'twoColumns',
      class: 'border-b border-warm-grey-200 py-4'
    },
    {
      titlesExist: 'notExist',
      intent: 'threeColumns',
      class: 'border-b border-warm-grey-200 py-4'
    },
    {
      titlesExist: 'exist',
      intent: 'threeColumns',
      class: 'border-b border-warm-grey-200 py-4'
    }
  ]
})

type TTableProps = VariantProps<typeof tableConfig>
export type TTableIntents = 'twoColumns' | 'threeColumns'
export interface ITable<C extends ColumnCount> extends TTableProps {
  headTitle: string | ReactElement
  // eslint-disable-next-line react/no-unused-prop-types
  columnCount: C
  titles?: Titles[]
  body: Body<C>
  additionalText?: string
}

export const Table = <C extends ColumnCount>({ headTitle, body, titles, additionalText, intent }: ITable<C>) => {
  const titlesExist = titles && titles.length > 0 ? 'exist' : 'notExist'

  return (
    <ResponsiveContainer>
      <div className='flex flex-col'>
        <Heading as='h3' className='mob-title-bold-m desktop:desk-title-bold-s pb-6'>
          {headTitle}
        </Heading>
        <div className={cn(tableOverflowConfig({ intent }))}>
          <ul className={cn(tableConfig({ intent }))}>
            {titles?.map(({ name }) => (
              <li className='border-b border-warm-grey-200 mob-body-regular-l desktop:desk-body-regular-l py-4'>{name}</li>
            ))}
          </ul>

          <ul className='mb-4 flex flex-col'>
            {body.rows.map(({ rowText }) => (
              <li className={cn(itemTableConfig({ intent, titlesExist }))}>
                {rowText.map((item) => (
                  <p className={cn(textTableConfig({ titlesExist, intent }))}>{item}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <p className='mob-body-regular-m desktop:desk-body-regular-l'>{additionalText}</p>
      </div>
    </ResponsiveContainer>
  )
}
