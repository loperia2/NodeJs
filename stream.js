const { createReadStream } = require('fs')

const { join } = require('path')

const bigFilePath = join('./content', 'bigFile.txt')

const stream = createReadStream(bigFilePath, {
  highWaterMark: 90000,
  encoding: 'utf8'
})

stream.on('data', (result) => {
  console.log(result)
})