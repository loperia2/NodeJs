const http = require('http')

const { join } = require('path')

const { readFileSync } = require('fs')

const server = http.createServer()

const bigFilePath = join('./content', 'bigFile2.txt')
const encode = 'utf8'

server.on('request', (req, res) => {
  console.log('burası')
  const text = readFileSync(bigFilePath, encode)
  res.end(text)
})

server.listen(5000)