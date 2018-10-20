const { n8: n } = require('./largeConstants')

let products = []
for (let i = 0; i <= n.length - 13; i++) {
  let numbers = n.slice(i, i + 13).split('')
  products.push(numbers.reduce((a, b) => a * b, 1))
}

exports.value = Math.max(...products)
