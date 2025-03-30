/**
 * The function prints deposit amount after N years to the console
 * @param {number} deposit - deposit value
 * @param {number} years - years value
 */

const printDepositAmount = (deposit: number, years: number): void => {
  const percent = 3
  let currentYear = 0

  while (currentYear < years) {
    currentYear++
    deposit = deposit * (1 + percent / 100)
  }

  console.log(Math.round(deposit))
}

export default printDepositAmount
