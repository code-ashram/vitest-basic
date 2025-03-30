import { describe, expect, it, vi } from 'vitest'
import printEqualNumbers from './task-5.ts'

describe('Print equal numbers of two values', () => {
  it('Equal numbers of values 12 and 123 are 12', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    printEqualNumbers(12, 123)

    expect(consoleSpy).toHaveBeenCalledWith(12)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('Equal numbers of values 234534 and 543453 are 345', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    printEqualNumbers(234534, 543453)

    expect(consoleSpy).toHaveBeenCalledWith(345)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
