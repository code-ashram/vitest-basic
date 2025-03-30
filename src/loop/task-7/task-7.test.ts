import { describe, expect, it, vi } from 'vitest'
import convertToReversedValue from './task-7.ts'


describe('The reversed number variant entered value', () => {
  it('The reversed number from 16180 is 80161', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    convertToReversedValue(16108)

    expect(consoleSpy).toHaveBeenCalledWith(80161)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The reversed number from 1488 is 8841', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    convertToReversedValue(1488)

    expect(consoleSpy).toHaveBeenCalledWith(8841)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
