import isGatsbyBuildTime from "./isGatsbyBuildTime"

export function getQueryStringParams() {
  const search = isGatsbyBuildTime ? "" : window.location.search
  const searchParams = new URLSearchParams(search)
  const params = {}

  searchParams.forEach((val, key) => {
    params[key] = val
  })

  return params
}
