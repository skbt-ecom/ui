import type { ReactElement } from 'react'

export type TTableColumnCount = 'twoColumns' | 'threeColumns'

export type TableRows<C extends TTableColumnCount> = ColumnsCount<C>[]

export type Ceil = {
  text: string | ReactElement
}

export type ColumnsCount<C extends TTableColumnCount> = C extends 'twoColumns'
  ? [Ceil, Ceil]
  : C extends 'threeColumns'
    ? [Ceil, Ceil, Ceil]
    : never

export type TTableClasses = {
  tableRootWrapper: string
  tableHeading: string
  tableBody: string
  tableRowTitles: string
  tableCell: string
  tableAdditionalText: string
  tableTitlesContainer: string
  tableTitleCeil: string
  tableBodyContainer: string
  tableTitleRow: string
  tableBodyRow: string
  tableBodyCeil: string
}
