// Register Service.
module.exports = ['$resource', '$rootScope', function($resource, $rootScope){
  // Create register service istance.
  var service = $resource($rootScope.settings.apiHost + '/api/public/register', {}, {
      save: {
        method  : 'POST',
        isObject: true
      }
  });

  // Create api.
  return {
    save: function(payload){
      return service.save(payload).$promise;
    }
  }
}];