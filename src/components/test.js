const numbers = [5, 2, 6]

const total = numbers.reduce((curr, n) => {
  return curr + n
}, 0)

console.log(total)
