// Get User Model.
var User = require('server/models/user');

// Export API.
module.exports = function(req, res) {
  // Fetch all users.
  User.find({}).populate('badges').exec(function(err, users) {
    // Response users as json.
    res.json(users);
  });
};