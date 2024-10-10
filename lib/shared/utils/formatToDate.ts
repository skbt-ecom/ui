import { parse } from 'date-fns'

export const formatToDate = (value: string, format = 'dd.MM.yyyy') => {
  return parse(value, format, new Date())
}
