"use strict";

// Required node modules
var sh = require("child_process").exec;

// Required files
var toJSON = require("./src/toJSON");

/**
 * Loads the resolved git config from `git config -l`.
 * @requires child_process
 * @public
 * @function load
 * @param  {Function} callback - Method receiving the error or results from the processing of the config.
 * @return {Object}
 */
function load(callback) {
  sh("git config -l", function (error, stdout, stderr) {
    if (error) {
      callback({
        error: error,
        stderr: stderr
      });
    } else {
      callback(null, toJSON(stdout));
    }
  });
}

module.exports = load;
