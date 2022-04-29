/**
 *
 * @param {string} type Dadata's type (fio|address)
 * @param {object} data
 * @param {object} options Dadata's options
 * @returns {Promise} Promise object with Dadata's response (as json if resolve)
 */
export const getDadata = (
  type,
  data,
  options = {},
  url = "https://api-app.sovcombank.ru/v1/cache/dadata",
  isBroker = false
) => {
  const query = {
    query: data,
    ...options,
  }

  let DADATA_URL

  if (type === "auto") {
    DADATA_URL = "https://api-app.sovcombank.ru/constants/auto"
  } else if (isBroker) {
    DADATA_URL = `https://apply-gateway.sovcombank.ru/api/dadata/${type}`
  } else {
    DADATA_URL = `${url}/${type}`
  }

  return fetch(DADATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(query),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Dadata error", err))
}
