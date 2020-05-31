const fetch = require('isomorphic-fetch')

/**
 * Get a piece of shit from r/poop.
 * 
 * @returns {Promise<string>} A URL of a piece of shit.
 */
const shit = () => fetch('https://www.reddit.com/r/poop/random.json')
  .then(res => res.json())
  .then(([{ data: { children: [{ data: { url } }] } }]) => url)
module.exports = shit
