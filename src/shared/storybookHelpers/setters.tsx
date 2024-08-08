import { createElement } from 'react'

export const setTextWithElementSB = (text: string, Element = 'button', className = '') => {
  return createElement(Element, { className }, text)
}
