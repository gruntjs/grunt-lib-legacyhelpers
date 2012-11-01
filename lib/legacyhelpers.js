/*
 * grunt-lib-legacyhelpers
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

exports.init = function(grunt) {
  'use strict';

  var gzip = require('gzip-js');

  var exports = {};

  // Concat source files and/or directives.
  exports.concat = function(files, options) {
    options = grunt.util._.defaults(options || {}, {
      separator: grunt.util.linefeed
    });
    return files ? files.map(function(filepath) {
      return grunt.file.read(filepath);
    }).join(grunt.util.normalizelf(options.separator)) : '';
  };

  // Return gzipped source.
  exports.gzip = function(src) {
    return src ? gzip.zip(src, {}) : '';
  };

  // Output some size info about a file.
  exports.min_max_info = function(min, max) {
    var gzipSize = String(exports.gzip(min).length);
    grunt.log.writeln('Uncompressed size: ' + String(max.length).green + ' bytes.');
    grunt.log.writeln('Compressed size: ' + gzipSize.green + ' bytes gzipped (' + String(min.length).green + ' bytes minified).');
  };

  return exports;
};
