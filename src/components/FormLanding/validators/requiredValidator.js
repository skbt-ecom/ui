/**
 *
 * @param {number|string|boolean|} value
 */
export const requiredValidator = value =>
  value || value === 0 ? null : 'Заполните поле';
