export interface ITable<C extends ColumnCount> {
  columnCount: C
  headingTitles: HeadingTitles[]
  body: Body<C>
}

type ColumnCount = '2' | '3'

type HeadingTitles = {
  name: string
}

type Body<C extends ColumnCount> = {
  columns: ColumnsForCount<C>
}

type ColumnsForCount<C extends ColumnCount> = C extends '2' ? [Column, Column] : C extends '3' ? [Column, Column, Column] : never

type Column = {
  bodyTitle: string
  bodyText: string[]
}
