import memoizeOne from "memoize-one"

export const fromSlider = memoizeOne(value => Math.round(Math.pow(10, value)))

export const toSlider = memoizeOne(value => Math.log(value) / Math.log(10))

export const round = memoizeOne((n, threshold = 2) => {
  n = n.toFixed(0)
  let digits = n.length
  let out = n.substr(0, Math.min(digits, threshold))

  if (digits > threshold) {
    out = out + "000000000000".substr(0, digits - threshold)
  }

  return parseInt(out, 10)
})
