export function extractNameAndCity(obj: { firstName: string; address: { city: string } }) {
  const { firstName: name, address: { city } } = obj
  return { name, city }
}

console.log(extractNameAndCity({ firstName: 'Dibas', address: { city: 'Thamel' } }))
