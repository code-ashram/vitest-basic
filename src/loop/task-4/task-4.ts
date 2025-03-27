/**
 * The function prints the greatest numbers of your value to the console
 * @param {number} value - Number that you want to work with
 */

const printTheGreatestNumber = (value: number) => {
  const s = value.toString()

  let maxNumber = 0

  for (let i = 0; i < s.length; i++) {
    if (+s.charAt(i) > maxNumber) {
      maxNumber = +s.charAt(i)
    }
  }

  console.log(maxNumber)
}

export default printTheGreatestNumber
