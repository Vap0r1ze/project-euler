const { getFactorPairs, isPalindrome } = require('./helpers')

for (let i = 1e6-2; i >= 1e4; i--) {
  if (isPalindrome(i)) {
    let middleFactors = getFactorPairs(i, true)
    if (/^\d{3},\d{3}$/.test(middleFactors)) {
      exports.value = i
      break
    }
  }
}
