const { readFile } = require('fs')

const { join } = require('path')

const pathFile = join('./content', 'first.txt')
const pathFileTwo = join('./content', 'second.txt')

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, result) => {
      if (err) {
        return reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

/* getText(pathFile).then(response => { console.log(response) }).catch( error => { console.log (error)}) */

const start = async () => {
  try {
    const first = await getText(pathFile)
    const second = await getText(pathFileTwo)
    console.log(first)
    console.log(second)
  } catch (error) {
    console.log(error)
  }
}
 
start()