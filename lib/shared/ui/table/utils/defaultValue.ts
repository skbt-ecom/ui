import type { ITable } from '../Table'

export const tableValue: ITable<'2'> = {
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
      },
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

export const tableValueThreeCols: ITable<'3'> = {
  columnCount: '3',
  headTitle: 'headTitle',
  titles: [{ name: 'Заголовок 1' }, { name: 'Заголовок 2' }, { name: 'Заголовок 3' }],
  body: {
    rows: [
      {
        rowText: ['Текст 1', 'Текст 2', 'Текст 3']
      },
      {
        rowText: ['Текст 1', 'Текст 2', 'Текст 3']
      }
    ]
  },
  additionalText: 'additionalText',
  intent: 'threeColumns'
}

export const tableValueWithoutTitles: ITable<'2'> = {
  columnCount: '2',
  headTitle: 'headTitle',
  body: {
    rows: [
      {
        rowText: ['Текст 1', 'Текст 2']
      },
      {
        rowText: ['Текст 1', 'Текст 2']
      },
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

export const tableValueThreeColsWithoutTitles: ITable<'3'> = {
  columnCount: '3',
  headTitle: 'headTitle',
  body: {
    rows: [
      {
        rowText: ['Текст 1', 'Текст 2', 'Текст 3']
      },
      {
        rowText: ['Текст 1', 'Текст 2', 'Текст 3']
      }
    ]
  },
  additionalText: 'additionalText',
  intent: 'threeColumns'
}
