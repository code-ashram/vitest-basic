import { describe, expect, it, vi } from 'vitest'
import printDepositAmount from './task-6.ts'

describe('Print deposit amount after the specified years', () => {
  it('Print deposit amount of 100 USD after 6 years', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    printDepositAmount(100, 6)

    expect(consoleSpy).toHaveBeenCalledWith(119)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })

  it('Print deposit amount of 100 USD after 6 years', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    printDepositAmount(80_000, 7)

    expect(consoleSpy).toHaveBeenCalledWith(98390)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
  })
})
