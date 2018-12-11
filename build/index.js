const { debuglog } = require('util');

const LOG = debuglog('@demimonde/demimonde')

/**
 * The Azure Function To Read Metadata, Generate Previews And Record Images In The Tables.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function demimonde(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@demimonde/demimonde called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = demimonde
//# sourceMappingURL=index.js.map