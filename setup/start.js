// App path.
require('app-module-path').addPath(__dirname + '/../');

// Require dependencies.
var open = require('open');

// Run services.
require('server/services/site/app');
require('server/services/api/app');

// Open running application site.
open('http://localhost:7007');