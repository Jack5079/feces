// @ts-ignore
import fetch from 'isomorphic-fetch'

/**
 * Get a piece of shit from r/poop.
 * 
 * @returns {Promise<string>} A URL of a piece of shit.
 */
async function shit () {
  const [{ data: { children: [{ data: { url } }] } }] = await fetch(globalThis.navigator ? `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.reddit.com/r/poop/random.json')}` : 'https://www.reddit.com/r/poop/random.json').then(res => res.json())
  return url
}
export default shit
