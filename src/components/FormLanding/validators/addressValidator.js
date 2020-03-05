import { requiredValidator } from './requiredValidator';

/**
 *
 * @param {object} dadataValue DadataField's value
 */
export const addressValidator = dadataValue => {
  if (requiredValidator(dadataValue)) {
    return 'Выберите значение из списка';
  }
  const {
    data: { city, settlement, house },
  } = dadataValue;

  if (!(city || settlement)) {
    return 'Укажите город или населенный пункт';
  }
  if (!house) {
    return 'Укажите дом';
  }
  return null;
};

/**
 *
 * @param {object} dadataValue DadataField's value
 */
export const addressWithFlatValidator = dadataValue => {
  const addressValidatorResult = addressValidator(dadataValue);

  if (addressValidatorResult) {
    return { addressDadata: addressValidatorResult };
  }
  const {
    data: { flat },
    isNoFlat,
  } = dadataValue;

  if (!flat && !isNoFlat) {
    return { flat: 'Укажите квартиру' };
  }

  return null;
};
