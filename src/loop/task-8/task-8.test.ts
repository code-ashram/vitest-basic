import { describe, expect, it, vi } from 'vitest'
import addMissingChars from './task-8.ts'

describe('Add missing chars to first value', () => {
  it('The results from numbers 1488 and 16108 is: 148860', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    addMissingChars(1488, 16108)

    expect(consoleSpy).toHaveBeenCalledWith(148860)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The results from numbers 100 and 6100 are: 1006 and 6100', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    addMissingChars(100, 6100)

    expect(consoleSpy).toHaveBeenCalledWith(1006)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
