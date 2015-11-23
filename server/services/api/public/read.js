// Get User Model.
var Post = require('server/models/post');

// Export API.
module.exports = function(req, res) {
  // Fetch one post.
  Post.findOne({_id:req.body.id}).populate('author').exec(function(err, post) {
    // Response post as json.
    res.json(post);
  });
};