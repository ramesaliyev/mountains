// Leaderboard controller.
module.exports = ['$scope', 'Services.User', function($scope, UserService) {
  // Scope model.
  $scope.model = {
    status: 'loading',
    users : []
  }

  // Connect to service and retrieve users.
  UserService.all().then(function(users){
    // Sort users by badge counts.
    users = _.sortBy(users, function(user){
      return user.badges.length;
    });

    // Order, limit.
    users = users.reverse().splice(0, 10);

    // Sort badges.
    users = users.map(function(user){
      user.badges = _.sortBy(user.badges, 'codename');  
      return user;
    });

    // Assign users.
    $scope.model.users = users;

    // Change status.
    $scope.model.status = 'loaded';
  });
}]