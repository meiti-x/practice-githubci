// sum.test.js
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 1.5 + 1.5 to equal 3', () => {
  expect(sum(1.5, 1.5)).toBe(3)
})
