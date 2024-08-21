import type { ReactElement } from 'react'

export type ColumnCount = '2' | '3'

export type Titles = {
  name: string | ReactElement
}

export type Body<C extends ColumnCount> = {
  rows: Row<C>[]
}

export type ColumnsForCount<C extends ColumnCount> = C extends '2'
  ? [string, string]
  : C extends '3'
    ? [string, string, string]
    : never

export type Row<C extends ColumnCount> = {
  rowText: ColumnsForCount<C>
}
