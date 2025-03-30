/**
 * The function adds characters from the second number to the first number if they are not there
 * and then outputs a result in the console
 * @param {number} firstValue - First value
 * @param {number} secondValue - Second value
 */

const addMissingChars = (firstValue: number, secondValue: number): void => {
  let str1 = firstValue.toString()
  let str2 = secondValue.toString()
  let result = ''

  // Add to str1 symbols from str2 if that not exists
  for (let i = 0; i < str2.length; i++) {
    let exists = false

    for (let j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        exists = true
        break
      }
    }
    if (!exists) {
      result = str1 += str2[i]
    }
  }

  console.log(+result)
}

export default addMissingChars
