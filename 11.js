const { g11: grid } = require('./largeConstants.js')
const size = 4
const ys = grid.length
const xs = grid[0].length

let product = 0

for (let y = 0; y < ys; y++) {
  for (let x = 0; x <= ys - size; x++) {
    let n = grid[y].slice(x, x + size)
    let p = n.reduce((a, b) => a * b)
    if (p > product) product = p
  }
}
for (let y = 0; y <= ys - size; y++) {
  for (let x = 0; x < ys; x++) {
    let n = []
    for (let i = 0; i < size; i++) n.push(grid[y + i][x])
    let p = n.reduce((a, b) => a * b)
    if (p > product) product = p
  }
}
for (let y = 0; y <= ys - size; y++) {
  for (let x = 0; x <= ys - size; x++) {
    let n1 = []
    let n2 = []
    for (let i = 0; i < size; i++) n1.push(grid[y + i][x + i])
    for (let i = 0; i < size; i++) n2.push(grid[y + i][(xs - x - 1) - i])
    let p1 = n1.reduce((a, b) => a * b)
    let p2 = n2.reduce((a, b) => a * b)
    if (p1 > product) product = p1
    if (p2 > product) product = p2
  }
}

exports.value = product
