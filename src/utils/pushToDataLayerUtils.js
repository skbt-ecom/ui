import pushToDataLayer from "./pushToDataLayer"
//

// eslint-disable-next-line no-underscore-dangle
function _pushToDataLayer({ time = Date.now(), eventLabel = window.location.pathname, ...data }) {
  pushToDataLayer({ time, eventLabel, ...data })
}

export const pushToDataLayerLoadedStep = (name) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepLoaded",
    eventAction: name,
    time: Date.now(),
  })
}

export const pushToDataLayerInvalidField = (fieldKey, reason, eventAttempt = false) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "invalidField",
    eventAction: `${fieldKey} - ${typeof reason === "object" ? JSON.stringify(reason) : reason}`,
    focus: "onfocus",
    time: Date.now(),
    eventAttempt,
  })
}
export const pushToDataLayerSendForm = () => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "sendForm",
    eventAction: window.location.pathname,
    focus: "onfocus",
    time: Date.now(),
  })
}
export const pushToDataLayerRequiredValidField = (fieldKey) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "validateField",
    eventAction: fieldKey,
    focus: "onfocus",
    time: Date.now(),
  })
}
export const pushToDataLayerStepSuccess = (name) => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "stepSuccess",
    eventAction: name,
    time: Date.now(),
  })
}
export const pushToDataLayerFormSuccess = () => {
  _pushToDataLayer({
    event: "GAFormEvent",
    eventCategory: "formSuccess",
    eventAction: window.location.pathname,
    time: Date.now(),
  })
}

export const pushToDataLayerOnce = (() => {
  const isExecuted = {}

  // eslint-disable-next-line func-names
  return function (name, data) {
    if (!isExecuted[name]) {
      isExecuted[name] = true
      pushToDataLayer(data)
    }
  }
})()
