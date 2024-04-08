export function getEvenNumber(numbers) {
  const result = numbers.filter(number => number % 2 == 0)
  return result
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6]))
