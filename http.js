const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Homepage')
  }
  if(req.url === '/about') {
    res.end('About')
  }
})

server.listen(3000)