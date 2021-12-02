const os = require('os')

const user = os.userInfo()

const uptime = os.uptime()

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log('user:', user, 'uptime:', uptime, currentOs)