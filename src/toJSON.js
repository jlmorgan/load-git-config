"use strict";

// Required node modules
var reduce = require("lodash").reduce;

// Required files
var mergeSplitOption = require("./mergeSplitOption");
var toObject = require("./toObject");

/**
 * Converts a raw git config list output to JSON.
 * @requires {@link lodash|https://lodash.com}
 * @private
 * @function toJSON
 * @param  {String} rawConfig - Raw git config -l output.
 * @return {Object}
 * @see mergeSplitOption
 * @see toObject
 */
function toJSON(rawConfig) {
  var config = {};
  var delimiter = /\n/;
  var trimmedRawConfig = [];

  return reduce(
    reduce(
      rawConfig.trim().split(delimiter),
      mergeSplitOption,
      trimmedRawConfig
    ),
    toObject,
    config
  );
}

module.exports = toJSON;
