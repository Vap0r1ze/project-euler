const multiples = []

for (let i = 1; i < 1000; i++) {
  if (i % 3 && i % 5 || multiples.includes(i))
    continue
  else
   multiples.push(i)
}

exports.value = multiples.reduce((a, b) => a + b, 0)
