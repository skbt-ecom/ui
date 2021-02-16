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

export default function sendRequest(url, data) {
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(checkStatus)
}
