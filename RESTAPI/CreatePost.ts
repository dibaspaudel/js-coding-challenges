export async function createPost(title: string, body: string): Promise<any> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body })
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return await res.json()
}

(async () => {
  try {
    const post = await createPost('Hello', 'This is a test')
    console.log('createPost ->', post)
  } catch (e) {
    console.error('createPost error', e)
  }
})()
