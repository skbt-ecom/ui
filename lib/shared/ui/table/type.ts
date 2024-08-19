import type { ReactElement } from 'react'

export type ColumnCount = '2' | '3'

export type Titles = {
  name: string | ReactElement
}

export type Body<C extends ColumnCount> = {
  rows: ColumnsForCount<C>
}

export type ColumnsForCount<C extends ColumnCount> = C extends '2' ? [Row, Row] : C extends '3' ? [Row, Row, Row] : never

export type Row = {
  rowText: string[]
}
