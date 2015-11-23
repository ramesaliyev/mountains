// Get modules.
var express = require('express'),
    jwt     = require('jsonwebtoken');

// Get configs.
var authConfigs = require('configs/auth');

// Export api.
module.exports = function(app){
  // Create api routes.
  var privateApi = express.Router();

  // Route middleware to verify a token.
  privateApi.use(function(req, res, next) {
    // Check header or url parameters or post parameters for token.
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // Response with forbidden if token not provided.
    if(!token) return res.status(403).send();

    // verifies secret and checks exp
    jwt.verify(token, authConfigs.secret, function(err, decoded) {      
      // If something went wrong response with internal server error.
      if (err) return res.status(500).send();   
      
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;    
      
      // Go next middleware.
      next();
    });
  });

  // Private apis list.
  privateApi.post('/post', require('./private/post'));

  // Regiser apis.
  app.use('/api/private', privateApi);
}