type User = { name: string; age: number }

export function filterAdults(users: User[]): User[] {
  return users.filter(u => u.age >= 18)
}

console.log(filterAdults([{ name: "A", age: 17 }, { name: "B", age: 20 }]))
