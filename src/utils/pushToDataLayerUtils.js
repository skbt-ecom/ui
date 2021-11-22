import pushToDataLayer from "./pushToDataLayer"

// eslint-disable-next-line no-underscore-dangle
function _pushToDataLayer({ time = Date.now(), eventLabel = window.location.pathname, ...data }) {
  pushToDataLayer({ time, eventLabel, ...data })
}

export const pushToDataLayerLoadedStep = (stepN) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepLoaded",
    eventAction: `step${stepN}`,
  })
}

export const pushToDataLayerInvalidField = (fieldKey, reason) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "invalidField",
    eventAction: `${fieldKey} - ${typeof reason === "object" ? JSON.stringify(reason) : reason}`,
    focus: "onfocus",
  })
}
export const pushToDataLayerSendForm = () => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "sendForm",
    eventAction: window.location.pathname,
    focus: "onfocus",
  })
}
export const pushToDataLayerRequiredValidField = (fieldKey) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "validateField",
    eventAction: fieldKey,
    focus: "onfocus",
  })
}
export const pushToDataLayerStepSuccess = (stepN) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepSuccess",
    eventAction: `step${stepN}`,
  })
}
export const pushToDataLayerFormSuccess = () => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "formSuccess",
    eventAction: window.location.pathname,
  })
}
