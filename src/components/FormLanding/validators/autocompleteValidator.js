/**
 *
 * @param {obj} data with "value" prop
 */
export const autocompleteValidator = data =>
  data && data.value ? null : "Выберите значение из списка"
