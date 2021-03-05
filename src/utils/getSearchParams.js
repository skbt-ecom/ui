import canUseDom from "./canUseDom"

export default function getQueryStringParams() {
  const search = canUseDom ? "" : window.location.search
  const searchParams = new URLSearchParams(search)
  const params = {}

  searchParams.forEach((val, key) => {
    params[key] = val
  })

  return params
}
