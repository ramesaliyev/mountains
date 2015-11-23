// General configs.
module.exports = function(app){
  // Set user configurations.
  app.run(['$rootScope', '$cookies', function($rootScope, $cookies){
    // Keep global settings.
    $rootScope.settings = {
      apiHost     : 'http://localhost:7008',
      watcherHost : 'http://localhost:7009'
    };

    // User info.
    var user = $rootScope.user = {
      logged  : false,
      username: null,
      token   : null,
      id      : null
    };

    // Get login info from cookies.
    var loginInfo = $cookies.getObject('login');

    // If there is login info, save into user. 
    if(loginInfo) {
      user.logged   = true;
      user.username = loginInfo.username;
      user.token    = loginInfo.token;
      user.id       = loginInfo.id;  
    }  
  }]);

  // Configure app.  
  app.config(['NotificationProvider', function(NotificationProvider) {
    // Notification.
    NotificationProvider.setOptions({
      delay             : 10000,
      startTop          : 20,
      startRight        : 10,
      verticalSpacing   : 20,
      horizontalSpacing : 20,
      positionX         : 'right',
      positionY         : 'bottom',
      replaceMessage    : true
    });
  }]);

  // Register page title changer.
  app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
  }]);

  // Config global http inspector.
  app.config(['$httpProvider', function($httpProvider) {
    // Register inspector.
    $httpProvider.interceptors.push(['$q', '$location', '$rootScope', '$cookies', function($q, $location, $rootScope, $cookies) {
      return {
        // On request.
        request: function(config){
          // Add token to headers if user logged in.
          if($rootScope.user.logged) config.headers['x-access-token'] = $rootScope.user.token;

          // Return config.
          return config;   
        },

        // On response error.
        responseError: function(response) {
          // If status is forbidden
          if(response.status === 403) {
            // Redirect to login.
            $location.path('/logout');
          }

          return $q.reject();
        }
      };
    }]);        
  }]);
}