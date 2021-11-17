export default function pushToDataLayer({
  time = Date.now(),
  eventLabel = window.location.pathname,
  ...data
}) {
  // eslint-disable-next-line no-multi-assign
  const dataLayer = (window.dataLayer = window.dataLayer || [])
  dataLayer.push({ eventLabel, time, ...data })
  console.log(dataLayer)
}

export const pushToDataLayerLoadedStep = (stepN) => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepLoaded",
    eventAction: `step${stepN}`,
  })
}

export const pushToDataLayerInvalidField = (fieldKey, reason) => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "invalidField",
    eventAction: `${fieldKey} - ${typeof reason === "object" ? JSON.stringify(reason) : reason}`,
    focus: "onfocus",
  })
}
export const pushToDataLayerSendForm = () => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "sendForm",
    eventAction: window.location.pathname,
    focus: "onfocus",
  })
}
export const pushToDataLayerRequiredValidField = (fieldKey) => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "validateField",
    eventAction: fieldKey,
    focus: "onfocus",
  })
}
export const pushToDataLayerStepSuccess = (stepN) => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepSuccess",
    eventAction: `step${stepN}`,
  })
}
export const pushToDataLayerFormSuccess = () => {
  pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "formSuccess",
    eventAction: window.location.pathname,
  })
}
