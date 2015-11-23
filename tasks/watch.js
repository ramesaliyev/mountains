// Require dependencies.
var gulp = require('gulp');

// Get paths.
var paths = require('configs/paths');

// Export task. 
module.exports = function(){
  // Create watchers.
  gulp.watch(paths.app + '**/*.js',   ['buildjs']);
  gulp.watch(paths.css + '**/*.scss',   ['buildcss']);
  gulp.watch([paths.html + '**/*.html', paths.templates + '**/*.tpl'], ['buildhtml']);
  gulp.watch([paths.fonts + '**/*.*', paths.img + '**/*.*'], ['copy']);
};