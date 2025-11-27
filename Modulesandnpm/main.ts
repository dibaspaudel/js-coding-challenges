import { add, sub } from './math'
import g from './greet'
import * as utils from './utils'

console.log('math add', add(10, 7))
console.log('math sub', sub(10, 7))
console.log('greet as g', g('Dibas'))
console.log('utils.capitalize', utils.capitalize('world'))
console.log('utils.toArray', utils.toArray('x'))
