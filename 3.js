let n = 600851475143


for (let i = 2; i < n; i++) {
  while (!(n % i)) n /= i
}

exports.value = n
