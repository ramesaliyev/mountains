// Get Post Model.
var Post = require('server/models/post');

// Export API.
module.exports = function(req, res) {
  // Fetch all posts.
  Post.find({}).populate('author').exec(function(err, posts) {
    // Response posts as json.
    res.json(posts);
  });
};