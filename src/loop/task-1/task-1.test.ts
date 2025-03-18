import { describe, expect, it, vi } from 'vitest'
import getSumAndProduct from './task-1.ts'

describe('getAmount', () => {
  it('Sum and product of the digits of 1488', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    getSumAndProduct(1488)

    expect(consoleSpy).toHaveBeenCalledWith('Sum: 21, product: 256')
    expect(consoleSpy).toHaveBeenCalledTimes(1)

    consoleSpy.mockRestore()
  })
})
