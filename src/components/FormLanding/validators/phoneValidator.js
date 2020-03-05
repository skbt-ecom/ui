/**
 *
 * @param {string} phone ex. 71111111111
 */
export const phoneValidator = (phone = '') =>
  phone.length === 11 ? null : 'Введите номер телефона';
