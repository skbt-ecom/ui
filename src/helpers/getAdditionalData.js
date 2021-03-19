import getSearchParams from "../utils/getSearchParams"

export default function getAdditionalData() {
  return {
    url: window.location.href,
    cookie: window.document.cookie,
    qsParams: getSearchParams(),
  }
}
