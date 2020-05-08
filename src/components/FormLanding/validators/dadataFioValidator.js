import { requiredValidator } from './requiredValidator';

const FIO_ERROR_TXT = 'Введите фамилию, имя (и отчество, если есть)';

const validateFioStrValue = value => {
  const trimmedValue = value.trim();

  if (trimmedValue.split(' ').length < 2) {
    return FIO_ERROR_TXT;
  }

  const re = /^[\u0400-\u04FF -]+$/;
  if (!re.test(trimmedValue)) {
    return 'Поле должно содержать только кириллицу';
  }
  return null;
};

const validateFioDadataValue = dadataObj => {
  const { name, surname } = dadataObj;

  if (!name || !surname) {
    return FIO_ERROR_TXT;
  }

  return null;
};

/**
 *
 * @param {object | string} dadataFio DadataFio value
 */
export const fioDadataValidator = dadataFio => {
  const { dadataValue, inputValue, isDadataValueActual } = dadataFio;

  if (requiredValidator(inputValue)) {
    return FIO_ERROR_TXT;
  }

  return isDadataValueActual
    ? validateFioDadataValue(dadataValue)
    : validateFioStrValue(inputValue);
};
