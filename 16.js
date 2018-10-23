let pow = BigInt(2) ** BigInt(1000)
exports.value = pow.toString().split('').reduce((a, b) => +a + +b)
