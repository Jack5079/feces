import feces, {massive as phonk} from './esm.mjs'

(async () => {

  const assert = console.assert
  
  assert((await feces()).startsWith('https://i.redd.it/'))
  assert((await phonk()).startsWith('https://i.redd.it/'))

})()
