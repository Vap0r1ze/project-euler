const { isPrime } = require('./helpers')

let sum = 2
let n = 3

while (n < 2e6) {
  if (isPrime(n))
    sum += n
  n += 2
}

exports.value = sum
