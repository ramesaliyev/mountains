// App path.
require('app-module-path').addPath(__dirname);

// Require plugins.
require('gulp-load-tasks')();

// Require dependencies.
var gulp = require('gulp');

// Task sets and aliases.
gulp.task('buildall', ['buildjs', 'buildcss', 'buildhtml', 'buildvendors']);
gulp.task('default', ['watch']);