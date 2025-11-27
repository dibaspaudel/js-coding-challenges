export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function toArray<T>(v: T | T[]): T[] {
  return Array.isArray(v) ? v : [v]
}

console.log(capitalize('hello'))
console.log(toArray(5))
