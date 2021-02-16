import isGatsbyBuildTime from "./isGatsbyBuildTime"

export default function getSearchParam(key) {
  const search = isGatsbyBuildTime ? "" : window.location.search
  const searchParams = new URLSearchParams(search)
  const value = searchParams.get(key)

  return value === null ? "" : decodeURIComponent(value.replace(/\+/g, " "))
}
