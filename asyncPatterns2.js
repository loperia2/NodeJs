const { readFile, writeFile } = require('fs')
const { join } = require('path')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const collation = 'utf8'
const firstFilePath = join('./content', 'first.txt')
const secondFilePath = join('./content', 'second.txt')

const start = async () => {
  try {
    console.log('start')
    const firstResult = await readFilePromise(firstFilePath, collation)
    const secondResult = await readFilePromise(secondFilePath, collation)
    await writeFilePromise('./content/asyncPatterns2Result', `Result: ${firstResult} - ${secondResult}`)
  } catch (err) {
    console.log('Error:', err)
  }
}
start()
console.log('secondStart')