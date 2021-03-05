import requiredValidator from "./required"

const AUTO_ERROR_TXT = "Введите модель автомобиля"

/**
 *
 * @param {object | string} dadataFio DadataFio value
 */
export const autoDadataValidator = (dadataAuto) => {
  const { inputValue } = dadataAuto

  if (requiredValidator(inputValue)) {
    return AUTO_ERROR_TXT
  }

  return null
}
