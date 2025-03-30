import { describe, expect, it, vi } from 'vitest'
import getPiNumberWithoutRepeats from './task-9.ts'


describe('Get Pi number without repeated numbers', () => {
  it('The "clear" Pi number is: 3.14592687', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    getPiNumberWithoutRepeats()

    expect(consoleSpy).toHaveBeenCalledWith(3.14592687)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
