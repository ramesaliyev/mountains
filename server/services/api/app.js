// Add path.
require('app-module-path').addPath(__dirname + '/../../../');

// Get configs.
var expressConfig = require('configs/express');

// Get modules and create express server.
var express     = require('express'),
    cors        = require('cors'),
    path        = require('path'),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan');
    
// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); // Log requests to console.

// Get apis.
require('./public')(app);
require('./private')(app);

// Start server.
app.listen(expressConfig.ports.api);