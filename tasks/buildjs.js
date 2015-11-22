// Require dependencies.
var gulp        = require('gulp'),
    browserify  = require('browserify'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer');

// Get paths.
var paths = require('configs/paths');

// Export task.
module.exports = function() {
  browserify(paths.app + 'app.js', {paths: 'public/app/'})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(paths.build_js));
};