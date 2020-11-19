/**
 *
 * @param {str} dateStr ex: 27.02.2020
 */
export const maskDateToDate = dateStr => {
  const [day, month, year] = dateStr.split(".")
  return new Date(year, month - 1, day)
}

/**
 * from: https://stackoverflow.com/a/24267902/7136549
 * @param {date} bornDate
 */
export const getAge = bornDate => {
  const now = new Date()
  const birthday = new Date(now.getFullYear(), bornDate.getMonth(), bornDate.getDate())
  if (now >= birthday) {
    return now.getFullYear() - bornDate.getFullYear()
  }
  return now.getFullYear() - bornDate.getFullYear() - 1
}
