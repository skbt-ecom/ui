import removeTrailingSlash from "../helpers/removeTrailingSlash"

function checkStatus(response) {
  return response
    .json()
    .then((result) => {
      if (response.ok) {
        return Promise.resolve(result)
      }

      return Promise.reject(result)
    })
    .catch((err) => Promise.reject(err))
}

export default function sendRequest(url, data, apiId) {
  const requestUrl = apiId ? `${removeTrailingSlash(url)}/${apiId}` : url 
  return fetch(requestUrl, {
    method: apiId ? 'PUT' : 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkStatus)
}
