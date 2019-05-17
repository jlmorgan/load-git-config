"use strict";

// Required node modules
const reduce = require("lodash/reduce");

// Required files
const mergeSplitOption = require("./mergeSplitOption");
const toObject = require("./toObject");

/**
 * Converts a raw git config list output to JSON.
 *
 * @private
 * @param {String} rawConfig - Raw git config -l output.
 * @return {Object}
 * @require {@link lodash|https://lodash.com}
 */
function toJSON(rawConfig) {
  const config = {};
  const delimiter = /\n/u;
  const trimmedRawConfig = [];

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
