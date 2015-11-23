// Login controller.
module.exports = ['$scope', '$rootScope', '$location', '$cookies', 'Notification', 'Services.Login', function($scope, $rootScope, $location, $cookies, Notification, LoginService) {
  // Model
  $scope.model = {
    username: '',
    password: ''
  };

  // Register.
  $scope.login = function(){
    // Get values.
    var username = $scope.model.username,
        password = $scope.model.password;

    // Validate.
    if(!username || !password){
      return Notification.error('Username or Password cannot be blank!');
    }    
    
    // Login user.
    LoginService.login({
      username: username,
      password: password
    })
    .then(function(response){
      // Greet user.
      Notification.success('Aaah welcome back '+ response.username +'!');
      
      // Save to cookie.
      $cookies.putObject('login', {
        username: response.username,
        token   : response.token,
        id      : response.id
      });

      // Set user.
      $rootScope.user.logged   = true;
      $rootScope.user.username = response.username;
      $rootScope.user.token    = response.token;
      $rootScope.user.id       = response.id;

      // Connect to socket.
      $scope.initWatcher();

      // Redirect to login.
      $location.path('/');
    })
    .catch(function(response){
      // Notify user
      Notification.error('Username or password is wrong, or server is just not feel well. If error consist, try again later.');
    })
  }
}];