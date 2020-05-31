import feces from './esm.mjs'

(async () => {

  const assert = console.assert
  
  assert((await feces()).startsWith('https://i.redd.it/'))

})()
