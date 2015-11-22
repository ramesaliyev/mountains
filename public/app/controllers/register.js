// Register controller.
module.exports = ['$scope', '$location', 'Notification', 'Services.Register', function($scope, $location, Notification, RegisterService) {
  // Model
  $scope.model = {
    username: '',
    password: ''
  };

  // Register.
  $scope.register = function(){
    // Get values.
    var username = $scope.model.username,
        password = $scope.model.password;

    // Validate.
    if(!username || !password){
      return Notification.error('Username or Password cannot be blank!');
    }    
    
    // Register user.
    RegisterService.save({
      username: username,
      password: password
    })
    .then(function(response){
      // Notify user.
      Notification.success('Welcome '+ username +'!');

      // Redirect to login.
      $location.path('/login');
    })
    .catch(function(response){
      // Notify user
      Notification.error('Username may be taken, please choose another one. If error consist, try again later.');
    })
  }
}]