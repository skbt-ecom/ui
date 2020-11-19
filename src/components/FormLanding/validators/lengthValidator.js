/**
 *
 * @param {string} str
 * @param {number} length
 */
export default function lengthValidator(str, length) {
  return str.length === length ? null : "Заполните поле"
}
