"use strict";

/**
 * Ensures stray newlines in the value for key=value pairs are not lost in the line splits.
 * @private
 * @function mergeSplitOption
 * @param  {Array} results - The destination array.
 * @param  {String} line - The potential key=value pair.
 * @param  {Number} index - Line index.
 * @return {Array}
 */
function mergeSplitOption(results, line, index) {
  if (/^([^=]+)=/.test(line)) {
    results.push(line);
  } else {
    results[index - 1] += "\\n" + line;
  }

  return results;
}

module.exports = mergeSplitOption;
