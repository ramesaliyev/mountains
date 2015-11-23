// Get configs.
var expressConfig = require('configs/express'),
    authConfig    = require('configs/auth');

// Get modules.
var jwt  = require('jsonwebtoken'),
    path = require("path"),
    fs   = require("fs");

// Get models.
var User  = require('server/models/user'),
    Badge = require('server/models/badge');

// Checkers.
var checkers = {};

// Read and save all checkers.
var normalizedPath = path.join(__dirname + '/checkers');
fs.readdirSync(normalizedPath).forEach(function(file) {
  // Require all files.
  file = file.replace(".js", "");
  checkers[file] = require(normalizedPath +"/"+ file);
});

// Reward user with badge. 
function rewardBadge(codename, params){
  // Remove from checkers.
  delete params._userCheckers[codename];

  // Add badge to user.
  User.findOne({_id:params.user.id}, function(err, user){
    if(err || !user) return;

    // Add badge.
    user.badges.push(params.badge._id);
    user.markModified('badges');

    // Save
    user.save();
  });

  // Notify user!
  params._socket.emit('reward', params.badge);
}

// When everything is ready.
function initializeReporting(params){
  // Get values.
  var user          = params.user,
      socket        = params.socket,
      activeBadges  = params.activeBadges,
      badgeStatuses = params.badgeStatuses,
      userCheckers  = params.userCheckers;

  // Init checkers.
  Object.keys(userCheckers).forEach(function(checker){
    // Create and trigger init if badge status doesnt exist.
    if(!badgeStatuses[checker]) {
      // Create
      badgeStatuses[checker] = {};

      // Trigger init.
      userCheckers[checker].init({
        badge   : activeBadges[checker],
        status  : badgeStatuses[checker]
      });
    }
  });   

  // When message received.
  socket.on('message', function(msg){
    // Send message and activeBadges to all available checkers.
    Object.keys(userCheckers).forEach(function(checker){
      // run checker if only checker listener for this event.
      if(activeBadges[checker].requirements.event.indexOf(msg.event.type) === -1) return;

      // Run checker.
      userCheckers[checker].listener(msg, {
        user          : user,
        badge         : activeBadges[checker],
        status        : badgeStatuses[checker],
        reward        : rewardBadge,
        _userCheckers : userCheckers,
        _socket       : socket
      });
    });
  });

  // On disconnection.
  socket.on('disconnect', function(){
    // Save current badge statuses.
    User.findOne({_id:user.id}, function(err, user){
      if(err || !user) return;

      // Add badge.
      user.badgeStatuses = badgeStatuses;
      user.markModified('badgeStatuses');

      // Save
      user.save();
    });
  });

  // Fetch badges of user.
  socket.emit('report');
}

// Create socket.
var io = require('socket.io')();

// On connection.
io.on('connection', function (socket) {
  console.log('reconnected');

  // Keep verified user.
  var user         = null,
      activeBadges = {},
      userCheckers = require('util')._extend({}, checkers); 

  // Socket login event.
  socket.on('login', function(token){
    // Verify and keep user info.
    user = jwt.verify(token, authConfig.secret);
  
    // Get user badges.
    User.findOne({_id:user.id}, function(err, _user){
      if(!_user) return socket.disconnect();

      // Get all badges.
      Badge.find({}, function(err, badges){
        // Create badge list which user dont have yet.
        // Also filter checkers.
        badges.filter(function(badge){
          // Check if badge achieved.
          var badgeAchieved = (_user.badges.indexOf(badge._id) !== -1);

          // Delete from checkers if badge achieved.
          if(badgeAchieved) delete userCheckers[badge.codename];

          // Keep on list if badge not achieved yet.
          return !badgeAchieved;
        }).forEach(function(badge){
          // Convert array into object.
          activeBadges[badge.codename] = badge;
        });

        // Initialize reporting.
        initializeReporting({
          user          : user,
          socket        : socket,
          activeBadges  : activeBadges,
          badgeStatuses : _user.badgeStatuses || {},
          userCheckers  : userCheckers
        });
      });    
    });
  });
});

// Listen port.
io.listen(expressConfig.ports.watcher);