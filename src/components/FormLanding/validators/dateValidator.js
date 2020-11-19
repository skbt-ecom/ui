/**
 *
 * @param {string} date
 */
export const dateValidator = dateStr => {
  const re = /^\d{2}.\d{2}.\d{4}$/
  return re.test(dateStr) ? null : "Введите корректную дату"
}
