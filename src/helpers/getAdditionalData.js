import getSearchParams from "../utils/getSearchParams"

export default function getAdditionalData() {
  return {
    cookie: window.document.cookie,
    qsParams: getSearchParams(),
  }
}
