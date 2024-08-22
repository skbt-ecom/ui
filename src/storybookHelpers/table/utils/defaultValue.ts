import type { ITable } from '../../../../lib/shared/ui/table/Table'

export const tableValue: ITable<'twoColumns'> = {
  columnCount: 'twoColumns',
  headTitle: 'headTitle',
  tableHead: ['Заголовок 1', 'Заголовок 2'],
  tableRows: [
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }]
  ],
  additionalText: 'additionalText'
}

export const tableValueThreeCols: ITable<'threeColumns'> = {
  columnCount: 'threeColumns',
  headTitle: 'headTitle',
  tableHead: ['Заголовок 1', 'Заголовок 2', 'Заголовок 3'],
  tableRows: [
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }]
  ],
  additionalText: 'additionalText'
}

export const tableValueWithoutTitles: ITable<'twoColumns'> = {
  columnCount: 'twoColumns',
  headTitle: 'headTitle',
  tableRows: [
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }]
  ],
  additionalText: 'additionalText'
}

export const tableValueThreeColsWithoutTitles: ITable<'threeColumns'> = {
  columnCount: 'threeColumns',
  headTitle: 'headTitle',
  tableRows: [
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }],
    [{ text: 'Текст 1' }, { text: 'Текст 2' }, { text: 'Текст 3' }]
  ],
  additionalText: 'additionalText'
}
