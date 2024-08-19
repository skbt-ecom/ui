import type { ITable } from '../Table'

export const defaultTableValue: ITable<'2'> = {
  columnCount: '2',
  headTitle: 'headTitle',
  titles: [{ name: 'Заголовок 1' }, { name: 'Заголовок 2' }],
  body: {
    rows: [
      {
        rowText: ['Текст 1', 'Текст 2']
      },
      {
        rowText: ['Текст 1', 'Текст 2']
      }
    ]
  },
  additionalText: 'additionalText',
  intent: 'twoColumns'
}
