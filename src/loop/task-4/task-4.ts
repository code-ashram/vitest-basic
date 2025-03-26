/* 3. Display in console which digit of value is greater */

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
