export async function fetchPostsAndComments(): Promise<{ posts: any[]; comments: any[] }> {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
  ]
  const responses = await Promise.all(urls.map(u => fetch(u)))
  responses.forEach((r, i) => { if (!r.ok) throw new Error(`Request ${i} failed ${r.status}`) })
  const parsed = await Promise.all(responses.map(r => r.json())) as any[]
  const posts = Array.isArray(parsed[0]) ? parsed[0] : []
  const comments = Array.isArray(parsed[1]) ? parsed[1] : []
  return { posts, comments }
}

(async () => {
  try {
    const result = await fetchPostsAndComments()
    console.log('fetchPostsAndComments -> posts', result.posts.length, 'comments', result.comments.length)
  } catch (e) {
    console.error('fetchPostsAndComments error', e)
  }
})()
