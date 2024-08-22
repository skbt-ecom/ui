import { describe, expect, it } from 'vitest'
import { capitalize } from './capitalize'

describe('capitalize', () => {
  it('Каждое слово должно быть написано с заглавной буквы и разделено дефисом', () => {
    expect(capitalize('hello-world')).toBe('Hello-World')
  })

  it('Тестирование при передаче только одного слова', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('Тестирование при передаче пустой строки', () => {
    expect(capitalize('')).toBe('')
  })

  it('Тестирование при передаче нескольких дефисов', () => {
    expect(capitalize('one-two-three')).toBe('One-Two-Three')
  })

  it('Тестирование передаче строки, где вначале и в конце есть дефис', () => {
    expect(capitalize('-hello-world-')).toBe('-Hello-World-')
  })

  it('Тестирование при передаче строки из разых регистров букв', () => {
    expect(capitalize('hElLo-WoRlD')).toBe('Hello-World')
  })

  it('Тестирование при передаче строки, в который присутствуют цифры', () => {
    expect(capitalize('hello-123-world')).toBe('Hello-123-World')
  })
})
