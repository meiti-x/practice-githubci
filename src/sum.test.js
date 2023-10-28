// sum.test.js
import { sum } from './sum'

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('adds 1.5 + 1.5 to equal 3', () => {
  expect(sum(1.5, 1.5)).toBe(3)
})
