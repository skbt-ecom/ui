import requiredValidator from "./required"

const FIO_ERROR_TXT = "Введите фамилию, имя (и отчество, если есть)"

const validateFioStrValue = (value) => {
  const trimmedValue = value.trim()

  if (trimmedValue.split(" ").length < 2) {
    return FIO_ERROR_TXT
  }

  const re = /^[\u0400-\u04FF -]+$/
  if (!re.test(trimmedValue)) {
    return "Поле должно содержать только кириллицу"
  }
  return null
}

const validateFioDadataValue = (dadataObj) => {
  const { name, surname } = dadataObj

  if (!name || !surname) {
    return FIO_ERROR_TXT
  }

  return null
}

/**
 *
 * @param {object | string} value DadataField's value
 */
export const fioValidator = (value) => {
  // const isDadataFIOHasEmptyFields = ({ name, surname }) => name && surname;

  if (requiredValidator(value)) {
    return FIO_ERROR_TXT
  }
  if (typeof value === "string") {
    return validateFioStrValue(value)
  }
  if (typeof value.data === "object") {
    return validateFioDadataValue(value.data)
  }

  return null
}
