export async function loadTwoPages(): Promise<any[]> {
  const base = 'https://jsonplaceholder.typicode.com/posts'
  const res1 = await fetch(`${base}?_page=1`)
  if (!res1.ok) throw new Error(`HTTP ${res1.status}`)
  const page1 = await res1.json()
  const res2 = await fetch(`${base}?_page=2`)
  if (!res2.ok) throw new Error(`HTTP ${res2.status}`)
  const page2 = await res2.json()
  const p1 = Array.isArray(page1) ? page1 : []
  const p2 = Array.isArray(page2) ? page2 : []
  return [...p1, ...p2]
}

(async () => {
  try {
    const all = await loadTwoPages()
    console.log('loadTwoPages ->', all.length)
  } catch (e) {
    console.error('loadTwoPages error', e)
  }
})()
