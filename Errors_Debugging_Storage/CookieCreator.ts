export function setTokenCookie(value: string, hours = 24): void {
  const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString()
  const doc = (globalThis as any).document
  if (doc && typeof doc.cookie === 'string') {
    doc.cookie = `token=${value}; expires=${expires}; path=/`
  } else {
    ;(globalThis as any).__cookieStore = `token=${value}; expires=${expires}; path=/`
  }
}

setTokenCookie('abc123', 24)
const doc = (globalThis as any).document
console.log('document.cookie ->', doc ? doc.cookie : (globalThis as any).__cookieStore ?? 'no document')
