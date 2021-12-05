const { readFile } = require('fs')
const { join } = require('path')

const filePath = join('./content', 'first.txt')

console.log('Start')
readFile(filePath, 'utf8', (err, result) => {
  if(err) {
    console.log(err)
  }
  console.log('result:', result)
  console.log('completedFirstTask')
})

console.log('starting nextTask')