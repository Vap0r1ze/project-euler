exports.getFactorPairs = function getFactorPairs (n, middle) {
  let factors = []
  for (let i = Math.ceil(Math.sqrt(n)); i < n / 2; i++) {
    let d = n / i
    if (!Number.isInteger(d)) continue
    factors.push([d, i])
    if (middle) return factors[0]
  }
  return factors
}

exports.isPalindrome = function isPalindrome (n) {
  return n == n.toString().split('').reverse().join('')
}

exports.isPrime = function isPrime (n) {
  if (n < 2) return false
  if (n < 4) return true
  if (!(n % 2) || !(n % 3)) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (!(n % i) || !(n % (i + 2))) return false
  }
  return true
}

exports.factorCount = function factorCount (n) {
  if (!(n % 2)) n /= 2
  let d = 1
  let c = 0
  while (!(n % 2)) {
    c++
    n /= 2
  }
  d *= c + 1
  let p = 3
  while (n !== 1) {
    c = 0
    while (!(n % p)) {
      c++
      n /= p
    }
    d *= c + 1
    p += 2
  }
  return d
}
