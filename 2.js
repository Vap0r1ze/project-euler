const fib = [2, 1]

while (fib[0] < 4e6) {
  fib.unshift(fib[0] + fib[1])
}

exports.value = fib.filter(n => !(n % 2)).reduce((a, b) => a + b, 0)
