"use strict";

/**
 * Provides the configuration object used in the grunt-jscs task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    all: {
      options: {
        config: ".jscsrc",
        esnext: true
      },
      files: {
        all: filesets.all
      }
    }
  };
};
