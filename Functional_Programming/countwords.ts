export function countWords(arr: string[]): Record<string, number> {
  return arr.reduce((acc, w) => {
    acc[w] = (acc[w] ?? 0) + 1
    return acc
  }, {} as Record<string, number>)
}

console.log(countWords(["apple", "banana", "apple"]))
