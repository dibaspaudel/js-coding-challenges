export function loopWithDebugger(n: number): void {
  for (let i = 0; i < n; i++) {
    debugger
    console.log('iteration', i)
  }
}

loopWithDebugger(3)
