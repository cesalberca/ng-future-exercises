function getTotal(numbers) {
  return numbers.reduce((acc, x) => acc + x, 0)
}

console.log(getTotal([1, 2, 3, 4, 5]))
