function* gen (n) {
  yield n
  while (n !== 1) {
    if (n % 2) n = 3*n + 1
    else n /= 2
    yield n
  }
}

let longest = [1, 1]

for (let i = 2; i < 1e6; i++) {
  let iter = gen(i)
  let seq = []
  while (true) {
    let res = iter.next()
    seq.push(res.value)
    if (res.done) break
  }
  if (longest[1] < seq.length) longest = [i, seq.length]
}

exports.value = longest[0]
