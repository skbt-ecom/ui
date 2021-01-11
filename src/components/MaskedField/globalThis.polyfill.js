/* eslint-disable */
!(function () {
  if (typeof globalThis === "object") return

  Object.defineProperty(Object.prototype, "_T_", {
    get: function () {
      return this
    },
    configurable: true,
  })
  _T_.globalThis = _T_
  delete Object.prototype._T_
})()
