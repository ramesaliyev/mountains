// App path.
require('app-module-path').addPath(__dirname + '/../');

// Status.
console.log('Installation started.');

// Set pre-defined values in db.
require('./db/badges');

// Status
console.log('Badges saved.');

// Start system.
require('./start');

// Exit.
setTimeout(process.exit, 3000);