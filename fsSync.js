const { 
  readFileSync,
  writeFileSync
} = require('fs')

const path = require('path')

const firstFilePath = path.join('./content', 'first.txt')
const secondFilePath = path.join('./content', 'second.txt')

const firstFile = readFileSync(firstFilePath, 'utf8')
const secondFile = readFileSync(secondFilePath, 'utf8')

writeFileSync(firstFilePath, 'Denemex', { flag: 'a' })

