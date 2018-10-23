function* gen (n) {
  yield n
  while (n !== 1) {
    if (n % 2) n = 3*n + 1
    else n /= 2
    yield n
  }
}

let longest = [1, 1] // [number, sequence length]
let visited = { 1: 1 }
for (let i = 1e6 - 1; i > 1; i--) {
  if (visited[i]) continue
  let iter = gen(i)
  let seqlen = 0
  while (true) {
    let res = iter.next()
    let n = res.value
    if (visited[n]) {
      seqlen += visited[n]
      break
    } else {
      seqlen++
    }
    if (res.done) break
  }
  if (!visited[i]) visited[i] = seqlen
  if (longest[1] < seqlen) longest = [i, seqlen]
}

exports.value = longest[0]
