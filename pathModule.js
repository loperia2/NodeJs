const path = require('path')

const filePath = path.join('/content', 'subcontentOne', 'text.txt')

const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subcontentOne', 'text.txt')

console.log(filePath)

console.log(base)

console.log(absolute)