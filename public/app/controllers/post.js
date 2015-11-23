// Post controller.
module.exports = ['$scope', '$location', 'Notification', 'Services.Post', function($scope, $location, Notification, PostService) {
  // Model
  $scope.model = {
    title: '',
    text: ''
  };

  // Post.
  $scope.post = function(){
    // Get values.
    var title = $scope.model.title,
        text  = $scope.model.text;

    // Validate.
    if(!title || !text){
      return Notification.error('Title or Text cannot be blank!');
    }    
    
    // Save post.
    PostService.post({
      title: title,
      text: text
    })
    .then(function(response){
      // Notify user.
      Notification.success('Post saved: '+ title +'!');

      // Redirect to homepage.
      $location.path('/');
    })
    .catch(function(response){
      // Notify user
      Notification.error('Post may be exist, please name it differently. If error consist, try again later.');
    })
  }
}]