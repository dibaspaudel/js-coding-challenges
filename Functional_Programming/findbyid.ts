type Item = { id: number; [k: string]: any }

export function findById(arr: Item[], id: number): Item | undefined {
  return arr.find(item => item.id === id)
}

console.log(findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2))
