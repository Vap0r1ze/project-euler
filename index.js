const fs = require('fs')

function doProblem (n, omitN, cb) {
  let start = Date.now()
  let { value } = require(`./${n}.js`)
  let end = Date.now()
  let diff = end - start
  if (!omitN) process.stdout.write(`${n}: `)
  console.log(`${value} (${diff / 1000}s)`)
  if (typeof cb === 'function') cb(diff)
}

let [,, problem ] = process.argv

if (problem) {
  if (!fs.existsSync(`./${problem}.js`)) console.log(`Problem ${problem} does not exist`)
  else doProblem(problem, true)
} else {
  let dur = 0
  const problemCount = fs.readdirSync('.').filter(f => /^\d+\.js$/.test(f)).length

  for (let i = 1; i <= problemCount; i++) {
    doProblem(i, false, (diff) => dur += diff)
  }
  console.log(`${dur / 1000}s total`)
}
