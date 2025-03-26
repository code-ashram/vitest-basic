/* 3. Print the sum of even numbers of number n */

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
