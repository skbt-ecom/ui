import requiredValidator from "./required"

const FIO_ERROR_TXT = "Введите фамилию, имя (и отчество, если есть)"
const RE = /^[\u0400-\u04FF\u00CB\u00EB -]+$/

const validateFioStrValue = (value) => {
  const trimmedValue = value.trim()

  if (trimmedValue.split(" ").length < 2) {
    return FIO_ERROR_TXT
  }

  if (!RE.test(trimmedValue)) {
    return "Поле должно содержать только кириллицу"
  }
  return null
}

const validateFioDadataValue = (dadataObj) => {
  const {
    data: { name, surname, patronymic },
  } = dadataObj

  if (!name || !surname) {
    return FIO_ERROR_TXT
  }

  if (!RE.test(patronymic ? name + surname + patronymic : name + surname)) {
    return "Поле должно содержать только кириллицу"
  }

  return null
}

/**
 *
 * @param {object | string} dadataFio DadataFio value
 */
export const fioDadataValidator = (dadataFio) => {
  const { dadataValue, inputValue, isDadataValueActual } = dadataFio

  if (requiredValidator(inputValue)) {
    return FIO_ERROR_TXT
  }

  return isDadataValueActual ? validateFioDadataValue(dadataValue) : validateFioStrValue(inputValue)
}
