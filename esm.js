// @ts-ignore
import fetch from 'https://cdn.pika.dev/isomorphic-fetch'

/**
 * Get a piece of shit from r/poop.
 * 
 * @returns {Promise<string>} A URL of a piece of shit.
 */
async function shit () {
  try {
    const [{ data: { children: [{ data: { url } }] } }] = await fetch('https://www.reddit.com/r/poop/random.json').then(res => res.json())
    return url
  } catch {
    const [{ data: { children: [{ data: { url } }] } }] = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.reddit.com/r/poop/random.json')}`).then(res => res.json())
    return url
  }
}
export default shit
