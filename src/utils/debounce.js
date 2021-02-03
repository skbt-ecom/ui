/**
 *
 * @param {function} fn  function which must running with debounce
 * @param {number} [delay=2000] delay, when calling fn
 */
export default function debounce(fn, delay = 2000) {
  let timerId = null
  return function a(...args) {
    const doSmth = () => {
      fn.apply(this, args)
      timerId = null
    }
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(doSmth, delay)
  }
}
