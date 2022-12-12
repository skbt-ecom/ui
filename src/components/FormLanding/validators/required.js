/**
 *
 * @param {number|string|boolean|} value
 */
export default function requiredValidator(value) {
  if (typeof value === "string" && value.trim() === "") {
    return "Заполните поле"
  }

  if (value || value === 0) {
    return null
  }

  return "Заполните поле"
}
