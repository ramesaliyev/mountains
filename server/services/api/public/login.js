// Get dependencies.
var jwt = require('jsonwebtoken');

// Get User Model.
var User = require('server/models/user');

// Get configs.
var authConfigs = require('configs/auth');

// Export API.
module.exports = function(req, res) {
  // Get username and password.
  var username = req.body.username,
      password = req.body.password;

  // Response error if values missing.
  if(!username || !password) {
    return res.status(400).send();  
  };

  // Find the user.
  User.findOne({
    username: username
  }, function(err, user) {
    // Send server error if something went bad.
    if (err) return res.status(500).send(err);

    // If user doesnt found, dont let them know it.
    if (!user) return res.status(401).send();
    
    // Check password if user found.
    user.comparePassword(password, function(err, matched) {
      // Send server error ifsomething went bad.
      if (err) return res.status(500).send(err);

      // Send access denied if passwords doesnt match.
      if(!matched) return res.status(401).send();

      // If passwords match, create token.
      var token = jwt.sign(user, authConfigs.secret, {
        expiresInMinutes: 1440
      });

      // Return token.
      res.json({
        username: username,
        token   : token
      });
    });
  });  
};