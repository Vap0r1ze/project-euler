const { isPrime } = require('./helpers')

let n = 0

let i = 0
while (i < 1e4 + 1) {
  n++
  if (isPrime(n)) i++
}

exports.value = n
