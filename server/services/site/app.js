// Add path.
require('app-module-path').addPath(__dirname + '/../../../');

// Get configs.
var expressConfig = require('configs/express');

// Get modules and create express server.
var express     = require('express'),
    path        = require('path'),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan');

// Middlewares
app.use(express.static('public/build')); // Serve statics.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); // Log requests to console.

// Serve index.html for all routes.
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + "/../../../public/build/index.html"));
});

// Start server.
app.listen(expressConfig.ports.site);