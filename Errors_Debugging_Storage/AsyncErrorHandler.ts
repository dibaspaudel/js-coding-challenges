export async function fetchWithFail(): Promise<string> {
  try {
    const res = await fetch('https://invalid.invalid/')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  } catch (err) {
    return 'Failed'
  }
}

(async () => {
  const result = await fetchWithFail()
  console.log('fetchWithFail ->', result)
})()
