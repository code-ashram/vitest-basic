import { describe, expect, it, vi } from 'vitest'
import { logMultiplicationTable } from './task-1.ts'

describe('logMultiplicationTable', () => {
  it('Full Multiplication Table', () => {
    const table = [
      ['2 x 1 = 2\t3 x 1 = 3\t4 x 1 = 4\t5 x 1 = 5\t6 x 1 = 6\t7 x 1 = 7\t8 x 1 = 8\t9 x 1 = 9'],
      ['2 x 2 = 4\t3 x 2 = 6\t4 x 2 = 8\t5 x 2 = 10\t6 x 2 = 12\t7 x 2 = 14\t8 x 2 = 16\t9 x 2 = 18'],
      ['2 x 3 = 6\t3 x 3 = 9\t4 x 3 = 12\t5 x 3 = 15\t6 x 3 = 18\t7 x 3 = 21\t8 x 3 = 24\t9 x 3 = 27'],
      ['2 x 4 = 8\t3 x 4 = 12\t4 x 4 = 16\t5 x 4 = 20\t6 x 4 = 24\t7 x 4 = 28\t8 x 4 = 32\t9 x 4 = 36'],
      ['2 x 5 = 10\t3 x 5 = 15\t4 x 5 = 20\t5 x 5 = 25\t6 x 5 = 30\t7 x 5 = 35\t8 x 5 = 40\t9 x 5 = 45'],
      ['2 x 6 = 12\t3 x 6 = 18\t4 x 6 = 24\t5 x 6 = 30\t6 x 6 = 36\t7 x 6 = 42\t8 x 6 = 48\t9 x 6 = 54'],
      ['2 x 7 = 14\t3 x 7 = 21\t4 x 7 = 28\t5 x 7 = 35\t6 x 7 = 42\t7 x 7 = 49\t8 x 7 = 56\t9 x 7 = 63'],
      ['2 x 8 = 16\t3 x 8 = 24\t4 x 8 = 32\t5 x 8 = 40\t6 x 8 = 48\t7 x 8 = 56\t8 x 8 = 64\t9 x 8 = 72'],
      ['2 x 9 = 18\t3 x 9 = 27\t4 x 9 = 36\t5 x 9 = 45\t6 x 9 = 54\t7 x 9 = 63\t8 x 9 = 72\t9 x 9 = 81']
    ]

    const consoleSpy = vi.spyOn(console, 'log')

    logMultiplicationTable()

    expect(consoleSpy.mock.calls).toEqual(table)

    consoleSpy.mockRestore()
  })
})
