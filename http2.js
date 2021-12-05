const http = require('http')

const server = http.createServer((req, res) => {
  console.log('req')
  res.end('hey')
})

server.listen(5000, () => {
  console.log('listened')
})