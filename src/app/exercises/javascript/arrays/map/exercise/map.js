export function getPoweredByTwo(numbers) {
  return numbers.map(x => Math.pow(x, 2))
}
console.log(getPoweredByTwo([1, 2, 3, 4, 5]))
