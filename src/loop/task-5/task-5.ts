/**
 * The function prints equal numbers of your two values to the console
 * @param {number} firstValue - first value that you want to work with
 * @param {number} secondValue - second value that you want to work with
 */

const printEqualNumbers = (firstValue: number, secondValue: number): void => {
  const num1 = firstValue.toString()
  const num2 = secondValue.toString()
  let unique = ''

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1.charAt(i) === num2.charAt(j)) {
        let isOld = false

        for (let k = 0; k < unique.length; k++) {
          if (unique.charAt(k) === num1.charAt(i)) {
            isOld = true
          }
        }

        if (!isOld) {
          unique += num1.charAt(i)
        }
      }
    }
  }

  console.log(Number(unique))
}

export default printEqualNumbers
