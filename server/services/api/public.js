// Get modules.
var express = require('express');

// Export api.
module.exports = function(app){
  // Create api routes.
  var publicApi  = express.Router();

  // Public apis list.
  publicApi.post('/register', require('./public/register'));
  publicApi.post('/login', require('./public/login'));
  publicApi.get('/users', require('./public/users'));
  publicApi.post('/user', require('./public/user'));  
  publicApi.get('/posts', require('./public/posts'));
  publicApi.post('/read', require('./public/read'));
  publicApi.get('/badges', require('./public/badges'));

  // Regiser apis.
  app.use('/api/public', publicApi);
}