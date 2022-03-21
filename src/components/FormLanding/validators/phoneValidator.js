/**
 *
 * @param {string} phone ex. 71111111111
 */
export const phoneValidator = (phone) => {
  if (phone[1] === "8") {
    return "Введите корректный номер телефона"
  }
  if (phone.length !== 11) {
    return "Введите номер телефона полностью"
  }
  const re = /^(8|7)(3|4|5|6|9)/
  if (!re.test(phone)) {
    return "Код города/оператора должен начинаться с цифры 3, 4, 5, 6, 9"
  }

  return null
}
