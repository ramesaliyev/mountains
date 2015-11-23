// Get Badge Model.
var Badge = require('server/models/badge');

// Export API.
module.exports = function(req, res) {
  // Fetch all badges.
  Badge.find({}, function(err, badges) {
    // Response badges as json.
    res.json(badges);
  });
};