/**
 *
 * @param {string} type Dadata's type (fio|address)
 * @param {object} data
 * @param {object} options Dadata's options
 * @returns {Promise} Promise object with Dadata's response (as json if resolve)
 */
export const getDadata = (type, data, options = {}) => {
  const DADATA_URL = "https://api-app.sovcombank.ru/v1/cache/dadata"
  const query = {
    query: data,
    ...options
  }

  let url
  if (type !== "auto") {
    url = `${DADATA_URL}/${type}`
  } else {
    url = "https://api-app.sovcombank.ru/constants/auto"
  }

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(query)
  })
    .then(res => res.json())
    .catch(err => console.error("Dadata error", err))
}
