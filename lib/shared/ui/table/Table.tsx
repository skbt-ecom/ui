import type { ReactElement } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { Body, ColumnCount, Titles } from './type'
import { cn } from '$/shared/utils'

const tableConfig = cva('grid', {
  variants: {
    intent: {
      twoColumns: 'desktop:grid-rows-[repeat(2,_auto)] desktop:w-[656px]',
      threeColumns: 'desktop:grid-rows-[repeat(3,_auto)] desktop:w-[768px]'
    }
  }
})

type TTableProps = VariantProps<typeof tableConfig>
export type TTableIntents = 'twoColumns' | 'threeColumns'
export interface ITable<C extends ColumnCount> extends TTableProps {
  headTitle: string | ReactElement
  columnCount: C
  titles: Titles[]
  body: Body<C>
  additionalText?: string
}

export const Table = <C extends ColumnCount>({ headTitle, body, titles, columnCount, additionalText, intent }: ITable<C>) => {
  return (
    <div className='flex flex-col container p-5'>
      <h1 className='desk-title-bold-s pb-6'>{headTitle}</h1>
      <div className={cn(tableConfig({ intent }))}>
        <ul className={`grid grid-cols-${columnCount}`}>
          {titles.map(({ name }) => (
            <li className='border-b border-warm-grey-200 desk-body-regular-l py-4'>{name}</li>
          ))}
        </ul>
        <ul className={`grid grid-cols-${columnCount} mb-4`}>
          {body.rows.map(({ rowText }) => (
            <li>
              {rowText.map((item) => (
                <p className='desk-body-regular-l border-b border-warm-grey-200 py-4'>{item}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <p className='desk-body-regular-l'>{additionalText}</p>
    </div>
  )
}
