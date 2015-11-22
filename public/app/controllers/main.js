s// Main controller.
module.exports = ['$scope', '$rootScope', '$cookies', function($scope, $rootScope, $cookies) {
  // Keep global settings.
  $rootScope.settings = {
    apiHost     : 'http://localhost:7008',
    watcherHost : 'http://localhost:7009'
  };

  // User info.
  var user = $rootScope.user = {
    logged  : false,
    username: null,
    token   : null
  };

  // Get login info from cookies.
  var loginInfo = $cookies.getObject('login');

  // If there is login info, save into user. 
  if(loginInfo) {
    user.logged   = true;
    user.username = loginInfo.username;
    user.token    = loginInfo.token;  
  }
}];