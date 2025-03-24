export const logMultiplicationTable = () => {
  for (let i = 1; i < 10; i++) {
    // let line = ''
    //
    // for (let j = 2; j < 10; j++) {
    //   line += `${j} x ${i} = ${(j * i + '').padStart(2, ' ')}\t`
    //   if (j < 9) line += '\t'
    // }
    let line = []

    for (let j = 2; j < 10; j++) {
      line.push(`${j} x ${i} = ${(j * i + '').toString()}`.padStart(2, ' '))
    }

    line.join('\t')

    console.log(line)
  }
}

logMultiplicationTable()
