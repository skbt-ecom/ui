import type { ITable } from '../type'

export const defaultTableValue: ITable<'2'> = {
  columnCount: '2',
  headingTitles: [{ name: 'Заголовок 1' }, { name: 'Заголовок 2' }],
  body: {
    columns: [
      { bodyTitle: 'Заголовок 1', bodyText: ['Текст 1', 'Текст 2'] },
      { bodyTitle: 'Заголовок 2', bodyText: ['Текст 3', 'Текст 4'] }
    ]
  }
}
