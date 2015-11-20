// Require dependencies.
var gulp    = require('gulp'),
    connect = require('gulp-connect');

// Get paths.
var paths = require('configs/paths');

// Export task.
module.exports = function() {
  connect.server({
    root: paths.public + 'html/',
    port: 4004
  })
};