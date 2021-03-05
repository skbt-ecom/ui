/**
 *
 * @param {number|string|boolean|} value
 */
export default function requiredValidator(value) {
  if (value || value === 0) {
    return null
  }

  return "Заполните поле"
}
