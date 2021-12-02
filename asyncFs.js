const { readFile, writeFile } = require('fs')
const { join } = require('path')

const firstfilePath = join('./content', 'first.txt')
const secondFilePath = join('./content', 'second.txt')
readFile(firstfilePath, 'utf8', (err, firstResult) => {
  if (err) {
    console.log(err)
    return
  }
  const first = firstResult
  readFile(secondFilePath, 'utf-8', (err, secondResult) => {
    if (err) {
      console.log(err)
    }
    const second = secondResult
    const resultFilePath = join('./content', 'asyncResult.txt')
    writeFile(resultFilePath, `Result: ${second} ${first}`, () => {
      readFile(resultFilePath, 'utf8', (err, result) => {
        console.log(result)
      })
    })
  })
})

