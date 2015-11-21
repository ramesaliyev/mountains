// Require dependencies.
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    rename      = require('gulp-rename'),
    minify      = require('gulp-minify-css');

// Get paths.
var paths = require('configs/paths');

// Export task.
module.exports = function() {
  gulp.src(paths.css + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(paths.build_css));
};