"use strict";

// Third Party
const F = require("lodash/fp");

/**
 * Converts a line of key=value pair and appends repeat assignments on to an array for the same key.
 *
 * @private
 * @param {Object} results - The receiving object.
 * @param {String} line - The key=value pair.
 * @return {Object}
 * @require {@link lodash|https://lodash.com}
 */
function toObject(results, line) {
  const parts = line.match(/^([^=]+)=(.+?)$/u);
  const [, path, value] = parts || []; // Ignore the initial match.

  return F.get(path, results) ?
    F.set(path, [].concat(F.get(path, results), value), results) :
    F.set(path, value, results);
}

module.exports = toObject;
