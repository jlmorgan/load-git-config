"use strict";

// Required node modules
var _ = require("lodash");

// Aliases
var get = _.get;
var set = _.set;

/**
 * Converts a line of key=value pair and appends repeat assignments on to an array for the same key.
 * @requires {@link lodash|https://lodash.com}
 * @private
 * @function toObject
 * @param  {Object} results - The receiving object.
 * @param  {String} line - The key=value pair.
 * @return {Object}
 */
function toObject(results, line) {
  var parts = line.match(/^([^=]+)=(.+?)$/);
  var path = parts[1];
  var value = parts[2];

  return get(results, path) ?
    set(results, path, [].concat(get(results, path), value)) :
    set(results, path, value);
}

module.exports = toObject;
