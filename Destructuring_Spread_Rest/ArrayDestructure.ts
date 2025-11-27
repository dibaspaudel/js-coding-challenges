export function getFirstAndThird(arr: number[]): [number, number] {
  const [first = 0, , third = 0] = arr
  return [first, third]
}

console.log(getFirstAndThird([1, 2, 3]))
console.log(getFirstAndThird([5]))
