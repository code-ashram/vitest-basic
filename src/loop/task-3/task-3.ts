/**
 * The function prints the sum of even numbers of your value to the console
 * @param {number} value - Number that you want to work with
 */

export const printSumOfEvenNumbers = (value: number): void => {
  const s = value.toString()
  let sum = 0

  for (let i = 0; i < s.length; i++) {
    if (+s.charAt(i) % 2 === 0) {
      sum = sum + +s.charAt(i)
    }
  }

  console.log(sum)
}
