const numbers = []
let sum = 0

for (let i = 2; i < 2e6; i++) {
  if (!(numbers[i] === false)) {
    sum += i
    for (let p = i; p < 2e6; p += i) {
      numbers[p] = false
    }
  }
}

exports.value = sum
