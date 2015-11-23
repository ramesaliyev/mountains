// Post controller.
module.exports = ['$scope', '$routeParams', 'Services.Post', function($scope, $routeParams, PostService) {
  // Model
  $scope.model = {
    post: null
  };

  // Connect to service and retrieve blog posts.
  PostService.read({id: $routeParams.id}).then(function(post){
    // Assign posts.
    if(post) $scope.model.post = post;
  });
}]