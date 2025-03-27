import { describe, expect, it, vi } from 'vitest'
import printTheGreatestNumber from './task-4.ts'

describe('printTheGreatestNumber', () => {
  it('The greatest numbers of 108 will be:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printTheGreatestNumber(108)

    expect(consoleSpy).toHaveBeenCalledWith(8)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The greatest numbers of 1488 will be:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printTheGreatestNumber(8)

    expect(consoleSpy).toHaveBeenCalledWith(8)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('The greatest numbers of 13 will be:', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    printTheGreatestNumber(3)

    expect(consoleSpy).toHaveBeenCalledWith(3)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
