export class InvalidAgeError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'InvalidAgeError'
  }
}

export function validateAge(age: number): true {
  if (typeof age !== 'number' || Number.isNaN(age)) throw new InvalidAgeError('Age must be a number')
  if (age < 0) throw new InvalidAgeError(`Invalid age: ${age}`)
  return true
}

try {
  validateAge(25)
  console.log('age 25 valid')
} catch (e) {
  console.error(e)
}

try {
  validateAge(-5)
  console.log('age -5 valid')
} catch (e) {
  if (e instanceof InvalidAgeError) console.error('Caught InvalidAgeError:', e.message)
  else console.error(e)
}
