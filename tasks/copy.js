// Require dependencies.
var gulp = require('gulp');

// Get paths.
var paths = require('configs/paths');

// Export task.
module.exports = function() {
  // Copy fonts
  gulp.src(paths.fonts + '**/*.*').pipe(gulp.dest(paths.build_fonts));

  // Copy images
  gulp.src(paths.img + '**/*.*').pipe(gulp.dest(paths.build_img));
};