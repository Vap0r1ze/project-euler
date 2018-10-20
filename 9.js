
{ loop:
  for (let a = 1; a <= 1000 / 3; a++) {
    for (let b = a + 1; b <= 1000 / 2; b++) {
      let c = 1000 - a - b
      if (a * a + b * b === c * c) {
        exports.value = a * b * c
        break loop
      }
    }
  }
}
