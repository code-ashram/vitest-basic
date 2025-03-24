/**
 * The function outputs the sum and product of the digits of a number 'n' to the console
 * @param {number} value - Number that you want to work with
 * @returns 'sum: ..., product ...'
 */

const getSumAndProduct = (value: number): void => {
  const s: string = value.toString()
  let sum: number = 0
  let prod: number = 1

  for (let i = 0; i < s.length; i++) {
    sum = sum + +s.charAt(i)
  }

  for (let i = 0; i < s.length; i++) {
    prod = prod * +s.charAt(i)
  }

  console.log(`Sum: ${sum}, product: ${prod}`)
}

export default getSumAndProduct
