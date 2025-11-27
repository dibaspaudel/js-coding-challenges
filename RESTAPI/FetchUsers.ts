export async function getUsers(): Promise<string[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const users = await res.json()
  if (!Array.isArray(users)) throw new Error('Unexpected response format')
  return users.map((u: any) => (u && typeof u.name === 'string') ? u.name : String(u))
}

(async () => {
  try {
    const names = await getUsers()
    console.log('getUsers ->', names)
  } catch (e) {
    console.error('getUsers error', e)
  }
})()
