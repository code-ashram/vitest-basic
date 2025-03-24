export const logMultiplicationTable = () => {
  for (let i = 1; i < 10; i++) {
    let line = []

    for (let j = 2; j < 10; j++) {
      line.push(`${j} x ${i} = ${(j * i + '')}`.padStart(2, ' '))
    }

    const result = line.join('\t')

    console.log(result)
  }
}

logMultiplicationTable()
