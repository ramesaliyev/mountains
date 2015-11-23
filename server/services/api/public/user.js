// Get User Model.
var User = require('server/models/user');

// Export API.
module.exports = function(req, res) {
  // Fetch one user.
  User.findOne({_id:req.body.id}).populate('badges').exec(function(err, user) {
    // Response user as json.
    res.json(user);
  });
};