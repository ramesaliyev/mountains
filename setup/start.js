// App path.
require('app-module-path').addPath(__dirname + '/../');

// Require dependencies.
var open = require('open');

// Run server.
require('server/app')

// Open running application site.
open('http://localhost:7007');