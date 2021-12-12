const { writeFileSync } = require('fs')

const textCount = 100000

const nth = 2

const getFileName = (nth) => {
  return `bigFile${nth}`
}

for(let i = 0; i < textCount; i++) {
  writeFileSync(`./content/${getFileName(nth)}.txt`, `${i}-Güney\n`, { flag: 'a'})
}