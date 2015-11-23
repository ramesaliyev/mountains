// Login controller.
module.exports = ['$scope', '$rootScope', '$location', '$cookies', function($scope, $rootScope, $location, $cookies) {
  // Clear user.
  $rootScope.user.logged    = false;
  $rootScope.user.username  = null;
  $rootScope.user.token     = null;
  $rootScope.user.token     = null;

  // Clear cookies.
  $cookies.remove('login');

  // Disconnect from socket if exist.
  if($scope.socket) {
    $scope.socket.disconnect();
    clearInterval($scope.heartbeat);
  }

  // Redirect to login.
  $location.path('/login');
}];