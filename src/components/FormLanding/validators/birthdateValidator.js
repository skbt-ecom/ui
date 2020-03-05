import { dateValidator } from './dateValidator';
import { getAge, maskDateToDate } from '../utils/date';

const isTooYoung = (dateStr, validAge) => {
  const parsedDate = maskDateToDate(dateStr);
  const age = getAge(parsedDate);

  return age < validAge;
};
/**
 *
 * @param {string} date
 */
export const birthdateValidator = (date, validAge) => {
  const dateValidatorError = dateValidator(date);

  if (dateValidatorError) {
    return dateValidatorError;
  }

  return isTooYoung(date, validAge) ? 'Возраст не соответствует' : null;
};
