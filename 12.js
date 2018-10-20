const { factorCount } = require('./helpers')

let n = 1
let l = factorCount(1)
let r = factorCount(2)
while (l * r < 500) {
  n++
  l = r
  r = factorCount(n + 1)
}

exports.value = (n * (n + 1)) / 2
