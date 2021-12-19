const { createReadStream } = require('fs')

const { join } = require('path')

const bigFilePath = join('./content', 'bigFile2.txt')

const encode = 'utf8'

const options = {
  highWaterMark: 90000,
  encoding: encode
}

const stream = createReadStream(bigFilePath, options)

stream.on('data', (result) => {
  console.log(result)
})