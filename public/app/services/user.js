// User Service.
module.exports = ['$resource', '$rootScope', function($resource, $rootScope){
  // User service istance.
  var getService = $resource($rootScope.settings.apiHost + '/api/public/user', {}, {
      get: {
        method  : 'POST',
        isObject: true
      }
  });

  // Get all service.
  var allService = $resource($rootScope.settings.apiHost + '/api/public/users', {}, {
      all: {
        method  : 'GET',
        isArray : true
      }
  });

  // Create api.
  return {
    get: function(payload){
      return getService.get(payload).$promise;
    },

    all: function(){
      return allService.all().$promise;
    }
  }
}];