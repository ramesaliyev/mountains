// App path.
require('app-module-path').addPath(__dirname + '/../');

// Require dependencies.
var open = require('open');

// Log
console.log('Services running...')

// Run services.
require('server/services/site/app');
require('server/services/api/app');
require('server/services/watcher/app');

// Open running application site.
open('http://localhost:7007');