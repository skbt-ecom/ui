import { dateValidator } from './dateValidator';
import { getAge, maskDateToDate } from '../utils/date';

/**
 *
 * @param {*} dateStr
 * @param {*} validAgeMin
 * @param {*} validAgeMax default as 200, is a random great age
 */
const getIsAgeValid = (dateStr, { validAgeMin = 0, validAgeMax = 200 }) => {
  const parsedDate = maskDateToDate(dateStr);
  const age = getAge(parsedDate);
  return age >= validAgeMin && age <= validAgeMax;
};

/**
 *
 * @param {string} date
 */
export const birthdateValidator = (date, validAgeObjValues) => {
  const dateValidatorError = dateValidator(date);

  if (dateValidatorError) {
    return dateValidatorError;
  }

  return getIsAgeValid(date, validAgeObjValues)
    ? null
    : 'Возраст не соответствует';
};
