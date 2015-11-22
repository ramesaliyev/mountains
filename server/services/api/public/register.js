// Get User Model.
var User = require('server/models/user');

// Export API.
module.exports = function(req, res) {
  // Get username and password.
  var username = req.body.username,
      password = req.body.password;

  // Response error if values missing.
  if(!username || !password) {
    return res.status(400).send();  
  };

  // Otherwise save user.
  var user = new User({ 
    username: String(username).trim(), 
    password: String(password).trim() 
  });

  // Save user.
  user.save(function(err) {
    // If error while saving.
    if (err) return res.status(500).send(err);

    // Log
    console.log('New user saved', username);

    // If everything went well, response with success.
    res.status(200).send();
  });
};