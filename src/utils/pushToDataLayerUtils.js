import pushToDataLayer from "./pushToDataLayer"

// eslint-disable-next-line no-underscore-dangle
function _pushToDataLayer({ time = Date.now(), eventLabel = window.location.pathname, ...data }) {
  pushToDataLayer({ time, eventLabel, ...data })
}

export const pushToDataLayerLoadedStep = (name, time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepLoaded",
    eventAction: name,
    time,
  })
}

export const pushToDataLayerInvalidField = (fieldKey, reason, time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "invalidField",
    eventAction: `${fieldKey} - ${typeof reason === "object" ? JSON.stringify(reason) : reason}`,
    focus: "onfocus",
    time,
  })
}
export const pushToDataLayerSendForm = (time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "sendForm",
    eventAction: window.location.pathname,
    focus: "onfocus",
    time,
  })
}
export const pushToDataLayerRequiredValidField = (fieldKey, time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "validateField",
    eventAction: fieldKey,
    focus: "onfocus",
    time,
  })
}
export const pushToDataLayerStepSuccess = (name, time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepSuccess",
    eventAction: name,
    time,
  })
}
export const pushToDataLayerFormSuccess = (time) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "formSuccess",
    eventAction: window.location.pathname,
    time,
  })
}
