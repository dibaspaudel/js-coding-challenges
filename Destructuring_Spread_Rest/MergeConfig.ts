export function mergeConfig(defaultConfig: Record<string, any>, userConfig: Record<string, any>) {
  return { ...defaultConfig, ...userConfig }
}

const defaultConfig = { dark: false, lang: 'en' }
const userConfig = { dark: true }
console.log(mergeConfig(defaultConfig, userConfig))
