import getSearchParams from "../utils/getSearchParams"

export default function getAdditionalData() {
  let kameleoonData

  // https://developers.kameleoon.com/activation-api.html#kameleoon-api-currentvisit

  const kameleoonVisitorCode = window?.Kameleoon?.API?.Visitor?.code
  const kameleoonActivatedExperiments = window?.Kameleoon?.API?.CurrentVisit?.activatedExperiments

  if (kameleoonVisitorCode || kameleoonActivatedExperiments) {
    kameleoonData = { kameleoonVisitorCode, kameleoonActivatedExperiments }
  }

  return {
    url: window.location.href,
    cookie: window.document.cookie,
    qsParams: getSearchParams(),
    kameleoonData,
  }
}
