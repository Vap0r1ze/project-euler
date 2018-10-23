const gridSize = 20

let paths = 1
let n = gridSize * 2
let k = gridSize
for (let i = n - k + 1; i <= n; i++) paths *= i
for (let i = 1; i <= k; i++) paths /= i

exports.value = Math.floor(paths)
