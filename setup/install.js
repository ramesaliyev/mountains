// App path.
require('app-module-path').addPath(__dirname + '/../');

// Status.
console.log('Installation started.');

// Set pre-defined values in db.
require('./db/badges');

// Status
console.log('Badges saved.');
console.log('Building statics... This can take a while, be patient.');

// Build statics.
require('child_process').exec('gulp buildall', function(){
  // Status
  console.log('Statics build completed.');
  console.log('Navigating to site...')

  // Start system.
  require('./start');  
});