import { requiredValidator } from "./requiredValidator"

/**
 *
 * @param {object} dadataValue DadataField's value
 */
const addressValidator = dadataValue => {
  if (requiredValidator(dadataValue)) {
    return "Выберите значение из списка"
  }
  const {
    data: { city, settlement, house },
  } = dadataValue

  if (!(city || settlement)) {
    return "Укажите город или населенный пункт"
  }
  if (!house) {
    return "Укажите дом"
  }
  return null
}

/**
 *
 * @param {object} dadataAddressFlat DadataAddressFlat value
 */
export const addressFlatDadataValidator = dadataAddressFlat => {
  const { dadataValue = {} } = dadataAddressFlat
  const { inputFlat, isNoFlat, value } = dadataValue

  if (requiredValidator(value)) {
    return { addressDadata: "Выберите значение из списка" }
  }

  const addressValidatorResult = addressValidator(dadataValue)

  if (addressValidatorResult) {
    return { addressDadata: addressValidatorResult }
  }

  if (!inputFlat && !isNoFlat) {
    return { flat: "Укажите квартиру" }
  }

  return null
}

/**
 *
 * @param {object} dadataAddress DadataAddress value
 */
export const addressDadataValidator = dadataAddress => {
  const { dadataValue } = dadataAddress

  if (requiredValidator(dadataValue)) {
    return "Выберите значение из списка"
  }
  return addressValidator(dadataValue)
}
