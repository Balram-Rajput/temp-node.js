console.log('Welcome to Node Tutorial')

const _ = require('lodash')
const itme = [1,[2,[3,[4]]]]
const newitmes = _.flattenDeep(itme)
console.log(newitmes)