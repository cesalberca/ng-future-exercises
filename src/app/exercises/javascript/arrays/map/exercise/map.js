function getPoweredByTwo(numbers) {
  return numbers.map(function (number) {
    return Math.pow(number, 2)
  })
}

console.log(getPoweredByTwo([1, 2, 3, 4, 5]))
