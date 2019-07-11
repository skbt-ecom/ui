import memoizeOne from 'memoize-one';

/**
 *
 * @param {string} type Dadata's type (fio|address)
 * @param {object} data
 * @param {object} options Dadata's options
 * @returns {Promise} Promise object with Dadata's response (as json if resolve)
 */
const getDadata = (type, data, options = {}) => {
  const DADATA_URL =
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
  const API_KEY = '3696edb148443072e2f9b52b5a7cbc8a77f8745f';
  const query = {
    query: data,
    ...options,
  };
  return fetch(`${DADATA_URL}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${API_KEY}`,
    },
    body: JSON.stringify(query),
  })
    .then(res => res.json())
    .catch(err => console.error('Dadata error', err));
};

export default memoizeOne(getDadata);
