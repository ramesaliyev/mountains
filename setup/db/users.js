// Require model.
var User = require('server/models/user');

module.exports = function(callback){
  // Our freeman!
  new User({
    username: 'freeman',
    password: 12345
  }).save(callback);

  // Log
  console.log('User saved.');
}