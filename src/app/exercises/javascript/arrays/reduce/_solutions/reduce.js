export function getTotal(given) {
  return given.reduce((sum, number) => sum + number, 0)
}
