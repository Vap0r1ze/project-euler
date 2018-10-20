const divisors = [11, 13, 14, 16, 17, 18, 19, 20]

let n = 2520
while (!divisors.every(d => !(n % d))) n += 2520
exports.value = n
