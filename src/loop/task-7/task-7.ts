/**
 * The function makes a reversed number variant entered value.
 * For example, if the number entered is 3486, you'll get on display the number 6843
 * @param {number} value - entered value
 */

const convertToReversedValue = (value: number): void => {
  const stringValue = value.toString()
  let backNumber: string = ''

  for (let i = stringValue.length - 1; i >= 0; i--) {
    backNumber += stringValue.charAt(i)
  }

  console.log(+backNumber)
}

export default convertToReversedValue
