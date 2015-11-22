// Get modules.
var express = require('express');

// Export api.
module.exports = function(app){
  // Create api routes.
  var publicApi  = express.Router();

  // Public apis list.
  publicApi.post('/register', require('./public/register'));
  publicApi.post('/login', require('./public/login'));  

  // Regiser apis.
  app.use('/api/public', publicApi);
}