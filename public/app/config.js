// General configs.
module.exports = function(app){
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
      positionY         : 'bottom'
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
            // Clear user.
            $rootScope.user.logged    = false;
            $rootScope.user.username  = null;
            $rootScope.user.token     = null;

            // Clear cookies.
            $cookies.remove('login');

            // Redirect to login.
            $location.path('/login');
          }

          return $q.reject();
        }
      };
    }]);        
  }]);
}