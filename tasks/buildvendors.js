// Require dependencies.
var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

// Get paths.
var paths   = require('configs/paths'),
    vendors = require('configs/vendors')

// Export task.
module.exports = function(){
  // Create js vendors.
  gulp.src(vendors.js)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(paths.build_js));

  // Create css vendors.
  gulp.src(vendors.css)
    .pipe(concat('vendors.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.build_css));
}