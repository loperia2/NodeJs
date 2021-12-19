const http = require('http')
const fs = require('fs')
const path = require('path')

const bigFilePath = path.join('./content', 'bigFile2.txt')
const encode = 'utf8'

const options = [bigFilePath, encode]

const server = http.createServer((req, res) => {
  //const text = fs.readFileSync(...options)
  const fileStream = fs.createReadStream(...options)
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
  
})

server.listen(5000)
