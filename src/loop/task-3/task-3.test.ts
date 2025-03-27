import { describe, expect, it, vi } from 'vitest'
import { printSumOfEvenNumbers } from './task-3.ts'

describe('printSumOfEvenNumbers', () => {
  it('The sum of even numbers of 14786 should be 18:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printSumOfEvenNumbers(14786)

    expect(consoleSpy).toHaveBeenCalledWith(18)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The sum of even numbers of 108 should be 8:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printSumOfEvenNumbers(108)

    expect(consoleSpy).toHaveBeenCalledWith(8)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The sum of even numbers of 162 should not be 6:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printSumOfEvenNumbers(162)

    expect(consoleSpy).not.toHaveBeenCalledWith(6)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
