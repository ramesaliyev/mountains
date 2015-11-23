// Badges Service.
module.exports = ['$resource', '$rootScope', function($resource, $rootScope){
  // Badge service istance.
  var getService = $resource($rootScope.settings.apiHost + '/api/public/badges', {}, {
      get: {
        method  : 'GET',
        isArray : true
      }
  });

  // Create api.
  return {
    get: function(){
      return getService.get().$promise;
    }
  }
}];