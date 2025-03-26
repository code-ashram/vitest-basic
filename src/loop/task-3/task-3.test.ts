import { describe, expect, it, vi } from 'vitest'
import { printSumOfEvenNumbers } from './task-3.ts'

describe('printSumOfEvenNumbers', () => {
  it('The sum of even numbers of 14786 will be:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printSumOfEvenNumbers(14786)

    expect(consoleSpy).toHaveBeenCalledWith(18)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
