// Homepage controller.
module.exports = ['$scope', 'Services.Post', function($scope, PostService) {
  // Scope model.
  $scope.model = {
    status: 'loading',
    posts : []
  }

  // Connect to service and retrieve blog posts.
  PostService.get().then(function(posts){
    // Assign posts.
    if(posts) $scope.model.posts = posts.reverse();

    // Change status.
    $scope.model.status = 'loaded';
  });
}]