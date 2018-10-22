const { l13: list } = require('./largeConstants')

let sum = BigInt(0)
for (let n of list) sum += BigInt(n)
exports.value = sum.toString().slice(0, 10)
