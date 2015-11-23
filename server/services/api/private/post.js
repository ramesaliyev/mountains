// Get User Model.
var Post = require('server/models/post');

// Export API.
module.exports = function(req, res) {
  // Get title and text.
  var title = req.body.title,
      text  = req.body.text;

  // Response error if values missing.
  if(!title || !text) {
    return res.status(400).send();  
  };

  // Otherwise save post.
  var post = new Post({ 
    title : title, 
    text  : text,
    author: req.decoded.id
  });

  // Save post.
  post.save(function(err) {
    // If error while saving.
    if (err) return res.status(500).send(err);

    // Log
    console.log('New post saved', title);

    // If everything went well, response with success.
    res.status(200).send();
  });
};