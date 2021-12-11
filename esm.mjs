// @ts-ignore
import fetch from 'isomorphic-fetch'

/**
 * Get a piece of shit from r/poop.
 * 
 * @returns {Promise<string>} A URL of a piece of shit.
 */
export default () => fetch('https://api.allorigins.win/get?url=https://www.reddit.com/r/poop/random.json')
  .then(res => res.json())
  .then(({ contents }) => JSON.parse(contents))
  .then(([{ data: { children: [{ data: { url } }] } }]) => url)
