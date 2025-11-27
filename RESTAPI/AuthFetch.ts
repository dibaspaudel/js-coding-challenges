export async function fetchWithAuth(): Promise<any> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    headers: { Authorization: 'Bearer 12345' }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return await res.json()
}

(async () => {
  try {
    const data = await fetchWithAuth()
    console.log('fetchWithAuth ->', data)
  } catch (e) {
    console.error('fetchWithAuth error', e)
  }
})()
