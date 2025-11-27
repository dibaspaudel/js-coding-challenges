export function sum(...nums: number[]): number {
  return nums.reduce((s, n) => s + n, 0)
}

console.log(sum(1, 2, 3))
console.log(sum())
