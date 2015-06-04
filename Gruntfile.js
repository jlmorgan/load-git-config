"use strict";

// Required node modules
var loadTasks = require("jit-grunt");

// Required files
var filesets = require("./lib/grunt/filesets.json");

module.exports = function (grunt) {
  // Load grunt plugins
  loadTasks(grunt);

  grunt.initConfig({
    "jscs": require("./lib/grunt/jscs")(filesets),
    "jshint": require("./lib/grunt/jshint")(filesets)
  });

  grunt.registerTask("lint", "Run JSHint and JSCS.", [
    "jshint:all",
    "jscs:all"
  ]);
};
