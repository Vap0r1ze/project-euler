let x = 0
let y = 0

for (let i = 1; i <= 100; i++) {
  x += i**2
  y += i
}

exports.value = y**2 -x
