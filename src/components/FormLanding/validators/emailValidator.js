/**
 *
 * @param {string} date
 */
export const emailValidator = (emailStr) => {
  const re = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,12}$/
  return re.test(emailStr.trim()) ? null : "Введите корректный email"
}
