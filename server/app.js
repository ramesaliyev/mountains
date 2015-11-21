// Add path.
require('app-module-path').addPath(__dirname + '/../');

// Get configs.
var expressConfig = require('configs/express')

// Create express server.
var express = require("express"),
    path    = require('path'),
    app     = express();

// Serve static files.
app.use(express.static('public/build'));

// Start server.
app.listen(expressConfig.port);