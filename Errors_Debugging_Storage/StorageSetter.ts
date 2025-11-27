const storageObject = { theme: 'dark', logged: true }

type StorageLike = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

function createMemoryStorage(): StorageLike {
  const map = new Map<string, string>()
  return {
    getItem(key: string) {
      return map.has(key) ? map.get(key)! : null
    },
    setItem(key: string, value: string) {
      map.set(key, value)
    }
  }
}

const hasLocalStorage = typeof globalThis !== 'undefined' && typeof (globalThis as any).localStorage !== 'undefined'
const hasSessionStorage = typeof globalThis !== 'undefined' && typeof (globalThis as any).sessionStorage !== 'undefined'

const localStore: StorageLike = hasLocalStorage ? (globalThis as any).localStorage : createMemoryStorage()
const sessionStore: StorageLike = hasSessionStorage ? (globalThis as any).sessionStorage : createMemoryStorage()

export function setStorages(key: string, obj: any): void {
  try {
    const str = JSON.stringify(obj)
    localStore.setItem(key, str)
    sessionStore.setItem(key, str)
  } catch (e) {
    console.error('Storage error', e)
  }
}

export function readStorages(key: string): { local: any; session: any } {
  const local = (() => {
    try {
      const v = localStore.getItem(key)
      return v ? JSON.parse(v) : null
    } catch (e) {
      return null
    }
  })()
  const session = (() => {
    try {
      const v = sessionStore.getItem(key)
      return v ? JSON.parse(v) : null
    } catch (e) {
      return null
    }
  })()
  return { local, session }
}

setStorages('appState', storageObject)
console.log('readStorages ->', readStorages('appState'))
