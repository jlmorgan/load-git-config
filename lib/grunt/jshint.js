"use strict";

// Required node modules
var stylish = require("jshint-stylish");

/**
 * Provides the configuration object used in the grunt-jshint task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    all: {
      options: {
        jshintrc: true,
        reporter: stylish
      },
      files: {
        all: filesets.all
      }
    }
  };
};
