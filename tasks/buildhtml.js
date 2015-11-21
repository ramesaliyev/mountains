// Require dependencies.
var gulp    = require('gulp'),
    minify  = require('gulp-minify-html');

// Get paths.
var paths = require('configs/paths');

// Export task.
module.exports = function() {
  gulp.src(paths.html + '*.html')
    .pipe(minify())
    .pipe(gulp.dest(paths.build));

  gulp.src(paths.templates + '*.tpl')
    .pipe(minify())
    .pipe(gulp.dest(paths.build_tpl));
};