// Post controller.
module.exports = ['$scope', '$rootScope', '$q', '$routeParams', '$location', 'Services.User', 'Services.Badge', function($scope, $rootScope, $q, $routeParams, $location, UserService, BadgeService) {
  // Model
  $scope.model = {
    user  : null,
    badges: null,
    path  : $location.path()
  };

  // Determine id.
  var id = $routeParams.id || $rootScope.user.id;

  // Get services.
  $q.all({
    user  : UserService.get({id: id}),
    badges: BadgeService.get()  
  })
  .then(function(response){
    // Get values.
    var user    = response.user,
        badges  = response.badges;

    // Create user badges map.
    var userBadgesMap = _.map(user.badges, '_id');

    // Filter badges.
    badges = _.filter(badges, function(badge){
      return userBadgesMap.indexOf(badge._id) === -1;
    });
    
    // Assign models.
    $scope.model.user   = user;
    $scope.model.badges = badges;
  });
}]