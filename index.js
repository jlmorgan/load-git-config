"use strict";

// Required node modules
const sh = require("child_process").exec;

// Required files
const toJSON = require("./src/toJSON");

/**
 * Loads the resolved git config from `git config -l`.
 *
 * @param {Function} callback - Method receiving the error or results from the processing of the config.
 * @require child_process
 */
function load(callback) {
  sh(
    "git config -l",
    (error, stdout, stderr) => (error ?
      callback({
        error,
        stderr
      }) :
      callback(null, toJSON(stdout)))
  );
}

module.exports = load;
