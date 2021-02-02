import memoizeOne from "memoize-one"

export const fromSlider = memoizeOne((value) => Math.round(10 ** value))

export const toSlider = memoizeOne((value) => Math.log(value) / Math.log(10))

export const round = memoizeOne((n, threshold = 2) => {
  const n1 = n.toFixed(0)
  const digits = n1.length
  let out = n1.substr(0, Math.min(digits, threshold))

  if (digits > threshold) {
    out += "000000000000".substr(0, digits - threshold)
  }

  return parseInt(out, 10)
})
