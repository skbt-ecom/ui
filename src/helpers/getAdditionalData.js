import getSearchParams from "../utils/getSearchParams"

export default function getAdditionalData() {
  let kameleoonData

  try {
    const kameleoonVisitorCode = JSON.parse(localStorage.getItem('kameleoonVisitorCode'))
    kameleoonData = {kameleoonVisitorCode}
  } catch (error) {
    console.error('kameleoonVisitorCode parsing error', error.message)
  }

  return {
    url: window.location.href,
    cookie: window.document.cookie,
    qsParams: getSearchParams(),
    kameleoonData
  }
}
