/**
 * The function outputs Pi number without repeated numbers
 */

const getPiNumberWithoutRepeats = (): void => {
  const PI = '3.1415926535897932384626433832795'
  let answer = ''

  for (let i = 0; i < PI.length; i++) {
    if (PI.charAt(i) === PI.charAt(i)) {
      let isSame = false

      for (let j = 0; j < answer.length; j++) {
        if (answer.charAt(j) === PI.charAt(i)) {
          isSame = true
        }
      }

      if (!isSame) {
        answer += PI.charAt(i)
      }
    }
  }

  console.log(+answer)
}

export default getPiNumberWithoutRepeats
