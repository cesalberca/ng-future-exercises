export function concat(...arrays) {
  return arrays.reduce((accumulator, value) => [...accumulator, ...value], [])
}
