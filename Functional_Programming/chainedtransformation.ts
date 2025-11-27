export function sumSquaresEven(arr: number[]): number {
  return arr
    .map(n => n * n)
    .filter(sq => sq % 2 === 0)
    .reduce((s, n) => s + n, 0)
}

console.log(sumSquaresEven([1, 2, 3, 4]))
