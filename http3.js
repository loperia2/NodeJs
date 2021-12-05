const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Homepage')
  }
  if (req.url === '/about') {
    res.end('About')
    for(let i = 0; i < 100000; i++) {
      for(let j = 0; i < 100000; i++) {
        console.log(i,j)
      }
    }
  }
})

server.listen(5000, () => {
  console.log('Server Is Up')
})