const { find: y } = require('lodash')

const deneme = [{name: 'guney', lastname: 'yigitbas'}]
const n = y(deneme, (element) => {
  return element.name === 'guney'
})

console.log(n)